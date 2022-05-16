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

let main_div = document.querySelector(".inner-main");
// index to later access it in Play()
let index;
let tries = 0;

function create() {
    // clearing previus word from main_div
    main_div.innerHTML = "";
    // get random word from array
    // make it array
    // let word = words[getRnd(0, words.length - 1)].split("");
    let word = "abcc".split("");
    // index = words.indexOf(word.join(""));
    // tries = word.length + 3;
    document.querySelector(".tries").innerHTML = `tries: ${tries}`;
    // console.log("word:", word, "index:", index);
    // create divs in dom
    word.forEach((letter) => {
        let div = document.createElement("div");
        div.classList.add(`main-block`);
        div.classList.add(`val-${letter}`);
        div.innerHTML = letter;
        main_div.appendChild(div);
    });
    console.log(document);
}

function play(id) {
    if (tries === 0) {
        return alert("you don't have any try left, play again");
    } else {
        let word = words[index].split("");
        let match;
        word.forEach((letter) => {
            if (letter === id) {
                match = true;
            }
        });
        if (match) {
            document.querySelector(`.val-${id}`).classList.add("visible");
        } else if (!match) {
            document.querySelector(`#${id}`).classList.add("fail");
            document.querySelector(`#${id}`).disabled = true;
            tries -= 1;
            document.querySelector(".tries").innerHTML = `tries: ${tries}`;
        }
        let a = document.querySelectorAll(".visible");
        console.log(a);
    }
}

// utility functions

function getRnd(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}
let a = "b";
