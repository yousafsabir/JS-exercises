let words = [
    "about",
    "apple",
    "aunt",
    "away",
    "bash",
    "back",
    "before",
    "box",
    "buy",
    "csharp",
    "cake",
    "chair",
    "circle",
    "come",
    "dart",
    "dance",
    "deep",
    "die",
    "drop",
    "elixir",
    "each",
    "empty",
    "ever",
    "eye",
    "fortran",
    "face",
    "fever",
    "firm",
    "fork",
    "golang",
    "gate",
    "gift",
    "gold",
    "gun",
    "haskell",
    "hair",
    "hurt",
    "head",
    "hen",
    "ink",
    "isle",
    "iron",
    "ice",
    "javascript",
    "java",
    "junk",
    "jam",
    "juice",
    "jug",
    "kotlin",
    "kill",
    "knee",
    "knife",
    "know",
    "lua",
    "long",
    "last",
    "light",
    "lame",
    "matlab",
    "moon",
    "milk",
    "mad",
    "meal",
    "native",
    "negro",
    "news",
    "nice",
    "ocaml",
    "off",
    "old",
    "over",
    "oil",
    "python",
    "pain",
    "price",
    "pen",
    "pull",
    "php",
    "quick",
    "queen",
    "queer",
    "rust",
    "rain",
    "rice",
    "run",
    "ruby",
    "repair",
    "spell",
    "scala",
    "skin",
    "swift",
    "story",
    "solidity",
    "soup",
    "true",
    "thin",
    "typescript",
    "tilte",
    "toe",
    "ugly",
    "use",
    "unit",
    "voice",
    "visit",
    "water",
    "wasm",
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
let dupWord = [];
let word = [];
let tries = 0;
let totalTries;

// starting script
for (let i = 97; i < 123; i++) {
    document.querySelector(`#${String.fromCharCode(i)}`).disabled = true;
}
document.querySelector(".hint").disabled = true;

function start() {
    disableStart();
    enableBtns();
    clearFails();
    clearMainDiv();
    genWrdBlocks();
    setTries();
}

function play(id) {
    if (tries > 0) {
        let match = word.includes(id);
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
                }
            });
            word.splice(word.indexOf(id), 1);
        } else if (!match) {
            document.querySelector(`#${id}`).classList.add("fail");
            document.querySelector(`#${id}`).disabled = true;
            decTries();
            document.querySelector(
                ".tries"
            ).innerHTML = `${tries} out of ${totalTries} tries left`;
        }
    }
    winLose();
}

// utility functions

// =========================================

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
    word = getRndWord();
    console.log(word);
    dupWord = [...dupWord, ...word];

    // create divs in dom
    word.forEach((letter) => {
        let div = document.createElement("div");
        div.classList.add(`main-block`);
        div.classList.add(`val-${letter}`);
        div.innerHTML = letter;
        main_div.appendChild(div);
    });
    blocks = document.querySelectorAll(".main-block");
}

// =========================================

function hint() {
    if (tries >= 2) {
        let arr = [];
        blocks.forEach((block) => {
            if (!block.classList.contains("visible")) {
                arr.push(block);
            }
        });
        arr[getRnd(0, arr.length - 1)].classList.add("visible");
        tries = tries - 2;
        document.querySelector(".tries").innerHTML = `tries: ${tries}`;
        winLose();
    } else {
        alert("you don't have enough tries");
    }
}

function resetAll() {
    tries = 0;
    document.querySelector(".tries").innerHTML = "tries";
    word = [];
    clearFails();
    clearMainDiv();
    enableStart();
}

function setTries() {
    tries = word.length + 3;
    totalTries = word.length + 3;
    tries_div.innerHTML = `${tries} out of ${totalTries} tries left`;
}

function decTries() {
    tries -= 1;
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

function enableBtns() {
    for (let i = 97; i < 123; i++) {
        document.querySelector(`#${String.fromCharCode(i)}`).disabled = false;
    }
    document.querySelector(".hint").disabled = false;
}

function enableStart() {
    start_button.disabled = false;
    start_button.classList.remove("start-fail");
}

function winLose() {
    if (tries === 0) {
        alert("Unfortunately you lost the game, play again");
        resetAll();
    } else if (
        document.querySelectorAll(".visible").length === dupWord.length
    ) {
        alert("Congratulations, You won the game");
        resetAll();
    }
}
