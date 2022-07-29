// 3 levels of employ's, respondent, manager and director
// when call arrive its must be allocated to the first free respondent, if the theres no free respondent the call need to be escalate to the manger,
// if the manager also not free, the call must be escalated to the manager
// design the classes and the data structure for this call center and implement the function dispatchCall which assign's a call to the first free employ

const fs = require("fs");

class EmployFactory {
  types = {
    Director: Director,
    Manager: Manager,
    Respondent: Respondent,
  };
  createEmploy(name, id, type, CallCenter = null) {
    return new this.types[type](name, id, type, CallCenter);
  }
}
class Employ {
  name;
  id;
  type;
  constructor(name, id, type) {
    this.name = name;
    this.id = id;
    this.type = type;
  }
  getInformation() {
    return `name: ${this.name}, id: ${this.id}, type: ${this.type}`;
  }
}
class Respondent extends Employ {}
class Manager extends Employ {}
class Director extends Employ {
  isAvailable;
  CallCenter;
  constructor(name, id, type, CallCenter = null) {
    super(name, id, type);
    this.CallCenter = CallCenter;
    this.isAvailable = true;
  }
  getInformation() {
    return super.getInformation() + `call center: ${this.CallCenter}`;
  }
}
class CallCenter {
  employMap = new Map();
  availableRespondentsQueue = [];
  availableManagerQueue = [];
  waitingCallQueue = [];
  Director;
  activeCall = new Map();
  callCenterId;

  constructor(callCenterId, Director = null, employs = []) {
    this.callCenterId = callCenterId;
    if (Director) {
      this.Director = Director;
      this.addEmploys([Director]);
    }
    this.addEmploys(employs);
  }
  addEmploys(employs) {
    for (let employ of employs) {
      this.employMap.set(employ.id, employ);
      if (employ.type == "Manager") this.availableManagerQueue.unshift(employ);
      else if (employ.type == "Respondent")
        this.availableRespondentsQueue.unshift(employ);
      else this.Director = employ;
    }
  }
  dispatchCall(Call) {
    let freeEmploy;
    if (this.availableRespondentsQueue.length > 0) {
      freeEmploy = this.availableRespondentsQueue.pop();
    } else if (this.availableManagerQueue.length > 0) {
      freeEmploy = this.availableManagerQueue.pop();
    } else if (this.Director.isAvailable) {
      freeEmploy = this.Director;
      freeEmploy.isAvailable = false;
    } else {
      return this.addToWaitingCall(Call);
    }
    this.activeCall.set(freeEmploy.id, Call);
  }
  addToWaitingCall(Call) {
    this.waitingCallQueue.unshift(Call);
  }
  callEnded(employId, recap) {
    const employ = this.employMap.get(employId);
    const call = this.activeCall.get(employId);
    call.addRecap(recap);
    this.saveCallDetails(employ, call);
    this.activeCall.delete(employId);
    if (this.waitingCallQueue.length > 0) {
      let newCall = this.waitingCallQueue.pop();
      this.activeCall.set(employId, newCall);
    } else {
      this.returnToAvailability(employ);
    }
  }
  returnToAvailability(employ) {
    if (employ.type == "Manager") this.availableManagerQueue.unshift(employ);
    else if (employ.type == "Respondent")
      this.availableRespondentsQueue.unshift(employ);
    else employ.isAvailable = true;
  }
  saveCallDetails(employ, call) {
    const employInformation = employ.getInformation();
    const callInformation = call.getInformation();
    fs.writeFileSync(
      "./callDone.txt",
      "call: " + callInformation + " done by: " + employInformation + "\n",
      { flag: "a+" }
    );
  }
}
class Call {
  id;
  costumerName;
  recap;
  constructor(id, costumerName, recap = null) {
    this.id = id;
    this.costumerName = costumerName;
    this.recap = recap;
  }
  getInformation() {
    return `call id: ${this.id}, costumer name: ${this.costumerName}, call recap: ${this.recap}`;
  }
  addRecap(recap) {
    this.recap = recap;
  }
}

const main = () => {
  const employFactory = new EmployFactory();
  const director = employFactory.createEmploy("Avi", 0, "Director");
  const center = new CallCenter(0, director);
  center.addEmploys([
    employFactory.createEmploy("Tobi", 1, "Respondent"),
    employFactory.createEmploy("Mor", 2, "Respondent"),
    employFactory.createEmploy("Lana", 3, "Respondent"),
    employFactory.createEmploy("Bar", 4, "Respondent"),
    employFactory.createEmploy("Roi", 5, "Respondent"),
    employFactory.createEmploy("Mali", 6, "Manager"),
    employFactory.createEmploy("Mika", 7, "Manager"),
  ]);
  const call = new Call(0, "Meir");
  center.dispatchCall(call);
  const call2 = new Call(1, "Berry");
  center.dispatchCall(call2);
  const call3 = new Call(2, "Hanny");
  center.dispatchCall(call3);
  const call4 = new Call(3, "Sara");
  center.dispatchCall(call4);
  const call5 = new Call(4, "Magi");
  center.dispatchCall(call5);
  const call6 = new Call(5, "Neema");
  center.dispatchCall(call6);
  const call7 = new Call(6, "Limor");
  center.dispatchCall(call7);
  const call8 = new Call(7, "Topaz");
  center.dispatchCall(call8);
  const call9 = new Call(8, "Nala");
  center.dispatchCall(call9);
  const call10 = new Call(9, "Neri");
  center.dispatchCall(call10);

  center.callEnded(3, "Was very helpful");
  center.callEnded(2, "Angry costumer");
  center.callEnded(6, "Want To get a new phone");
  center.callEnded(2, "Says he want to merry sone");
  center.callEnded(5, "Please let me know if you read it");
  center.callEnded(4, "So glad this call ended");

  console.log(center);
};
module.exports = main;
