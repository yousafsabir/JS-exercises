// Going Standard
let get = () => {
    let inputStr = document.getElementById("input").value;
    let initialArr = splitter(inputStr);
    let reversedArr = reverser(initialArr);
    let finalStr = joiner(reversedArr);
    document.getElementById("result").innerHTML = finalStr;
};

// re-inventing the wheel
function splitter(inputString) {
    let initialArray = [];
    for (let index = 0; index < inputString.length; index++) {
        initialArray[index] = inputString[index];
    }
    return initialArray;
}

function reverser(initialArray) {
    let reversedArray = [];
    for (let index = initialArray.length; index > 0; index--) {
        reversedArray[initialArray.length - index] = initialArray[index - 1];
    }
    return reversedArray;
}

function joiner(reversedArray) {
    let finalString = "";
    for (let index = 0; index < reversedArray.length; index++) {
        finalString = finalString + `${reversedArray[index]}`;
    }
    return finalString;
}
