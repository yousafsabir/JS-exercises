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

let tries_div = document.querySelector(".tries");
let start_button = document.querySelector("#start");
let main_div = document.querySelector(".inner-main");
let blocks;
let initialWord;
let word = [];
let repeatWord = [];
let tries = 0;

function start() {
    disableStart();
    clearFails();
    clearMainDiv();
    genWrdBlocks();
    // setTimeout(setTries(), 500);
    setTries();
    // getRptdNdUnrptd();
}

function play(id) {
    if (tries > 0) {
        let match = initialWord.includes(id);
        let res = 1;
        if (match) {
            blocks.forEach((block) => {
                if (
                    !block.classList.contains("visible") &&
                    block.textContent === id &&
                    res >= 1
                ) {
                    block.classList.add("visible");
                    res -= 1;
                    console.log(block);
                    console.log("abc");
                }
            });
        } else if (!match) {
            document.querySelector(`#${id}`).classList.add("fail");
            document.querySelector(`#${id}`).disabled = true;
            decTries();
            document.querySelector(".tries").innerHTML = `tries: ${tries}`;
        }
    }
    winLose();
}

// utility functions

function getRnd(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

function getRndWord() {
    let word = words[getRnd(0, words.length - 1)].split("");
    return word;
}

function genWrdBlocks() {
    // initialWord = getRndWord();
    initialWord = ["w", "w", "w"];
    // create divs in dom
    initialWord.forEach((letter) => {
        let div = document.createElement("div");
        div.classList.add(`main-block`);
        div.classList.add(`val-${letter}`);
        div.innerHTML = letter;
        main_div.appendChild(div);
    });
    blocks = document.querySelectorAll(".main-block");
}

function setTries() {
    tries = initialWord.length + 3;
    tries_div.innerHTML = `tries: ${tries}`;
}

function decTries() {
    tries -= 1;
}

function resetAll() {
    tries = 0;
    document.querySelector(".tries").innerHTML = "tries";
}

function clearFails() {
    for (let i = 97; i < 123; i++) {
        document
            .querySelector(`#${String.fromCharCode(i)}`)
            .classList.remove("fail");
    }
}

function clearMainDiv() {
    main_div.innerHTML = "";
}

function disableStart() {
    start_button.disabled = true;
    start_button.classList.add("start-fail");
}

function enableStart() {
    start_button.disabled = false;
    start_button.classList.remove("start-fail");
}

function winLose() {
    if (tries === 0) {
        alert("Unfortunately you lost the game, play again");
    } else if (
        document.querySelectorAll(".visible").length === initialWord.length
    ) {
        alert("Congratulations, You won the game");
    }
}

// for word and repeatWord
function countInArray(array, element) {
    let repeat_count = 0;
    array.forEach((letter) => {
        if (letter === element) {
            repeat_count++;
        }
    });
    return repeat_count;
}

function getRptdNdUnrptd() {
    let present = [];
    initialWord.forEach((letter) => {
        repeats = countInArray(initialWord, letter);
        if (repeats > 1 && !present.includes(letter)) {
            repeatWord.push(Array(repeats).fill(letter));
            present.push(letter);
        } else if (repeats === 1) {
            word.push(letter);
        }
    });
}
