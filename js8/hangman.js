let words = [
    "about",
    "apple",
    "aunt",
    "away",
    "back",
    "before",
    "box",
    "buy",
    "cake",
    "chair",
    "circle",
    "come",
    "dance",
    "deep",
    "die",
    "drop",
    "each",
    "empty",
    "ever",
    "eye",
    "face",
    "fever",
    "firm",
    "fork",
    "gate",
    "gift",
    "gold",
    "gun",
    "hair",
    "hurt",
    "head",
    "hen",
    "ink",
    "isle",
    "iron",
    "ice",
    "junk",
    "jam",
    "juice",
    "jug",
    "kill",
    "knee",
    "knife",
    "know",
    "long",
    "last",
    "light",
    "lame",
    "moon",
    "milk",
    "mad",
    "meal",
    "native",
    "negro",
    "news",
    "nice",
    "off",
    "old",
    "over",
    "oil",
    "pain",
    "price",
    "pen",
    "pull",
    "quick",
    "queen",
    "queer",
    "rain",
    "rice",
    "run",
    "repair",
    "spell",
    "skin",
    "story",
    "soup",
    "true",
    "thin",
    "tilte",
    "toe",
    "ugly",
    "use",
    "unit",
    "voice",
    "visit",
    "water",
    "walk",
    "wife",
    "wire",
    "yard",
    "yell",
    "young",
    "zoo",
    "zero",
];

let word1 = ["apple", "banana", "pear"];

function main() {
    // get random word from array
    // make it array
    let word = words[getRnd(0, words.length - 1)].split("");
    console.log(word);
    // let main = document.querySelector(".main");
    // for (let i = 0; i < 5; i++) {
    //     let div = document.createElement("div");
    //     div.classList.add("main-block");
    //     main.appendChild(div);
    // }
}

function getRnd(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

main();
