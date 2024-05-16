// kata: https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript

function topThreeWords(text) {
  let wordsByOccurences = [];
  const splittedText = text
    .split(" ")
    .map((v) => v.replace(/[^\w']/g, "").toLowerCase())
    .filter((v) => new RegExp(/[\w]/g).test(v))
    .reverse();
  if (!splittedText.length) return [];
  for (let i = 0; i < splittedText.length; i++) {
    let elem = splittedText[i];
    let occurences = 0;
    for (let j = 0; j < splittedText.length; j++) {
      if (elem === splittedText[j]) {
        occurences += 1;
      }
    }
    if (!wordsByOccurences[occurences]) wordsByOccurences[occurences] = [];
    if (!wordsByOccurences[occurences].includes(elem))
      wordsByOccurences[occurences].push(elem);
  }
  return wordsByOccurences
    .filter((v) => v)
    .reduce((a, c) => [...a, ...c], [])
    .reverse()
    .slice(0, 3);
}

const res = topThreeWords("Monsters saw with a dresser at the rat");
console.log(res);
