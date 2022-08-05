// write an algorithm to find the frequency of a word in a book, what if we run this algorithm several times?

// my solution is that if we looking for a specific word once, the best option is go over the book and count (O(n) complex, O(1) space)
// but if we going to use this algorithm several times the better solution will be to store in a hash-map any word in the book as a key and the value will be the number of the appearance, that mean we use the hash-map as a cache, we can fill the hash map offline, before the algorithm is available to use, or other wise, for each call to check if we already have this word in the map, we have it, return the value, if not will use the first algorithm and will store the result for later usage
const wordMap = new Map(); // in real life that would be store in a redis or some kind of key-value cache in front of the app

const wordFrequency = (word, book) => {
  if (wordMap.has(word))
    return (
      "we used the cache this time, the number of appearance is " +
      wordMap.get(word)
    );
  let count = 0;
  for (let wordInTheBook of book.split(" ")) {
    if (wordInTheBook == word) count++;
  }
  wordMap.set(word, count);
  return (
    "Sorry its took us so much time, we didn't had this word in the cache, the number of appearance is " +
    count
  );
};

const book =
  "Systems for story generation are asked to produce plausible and enjoyable stories given an input context. This task is underspecified, as a vast number of diverse stories can originate from a single input. The large output space makes it difficult to build and evaluate story generation models, as (1) existing datasets lack rich enough contexts to meaningfully guide models, and (2) existing evaluations (both crowdsourced and automatic) are unreliable for assessing long-form creative text. To address these issues, we introduce a dataset and evaluation platform built from STORIUM, an online collaborative storytelling community. Our author-generated dataset contains 6K lengthy stories (125M tokens) with fine-grained natural language annotations (e.g., character goals and attributes) interspersed throughout each narrative, forming a robust source for guiding models. We evaluate language models fine-tuned on our dataset by integrating them onto STORIUM, where real authors can query a model for suggested story continuations and then edit them. Automatic metrics computed over these edits correlate well with both user ratings of generated stories and qualitative feedback from semi-structured user interviews. We release both the STORIUM dataset and evaluation platform to spur more principled research into story generation.";

const main = () => {
  console.log(wordFrequency("and", book));
  console.log(wordFrequency("as", book));
  console.log(wordFrequency("to", book));
  console.log(wordFrequency("and", book));
};

module.exports = main;
