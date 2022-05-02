let namesArray = [];
let outputArray = [];

function names() {
    let name = document.getElementById("name").value;
    namesArray.push(name);
}
function process() {
    for (let index = 0; index < namesArray.length; index++) {
        let name = namesArray[index];
        name = name.toLowerCase();
        nameArray = name.split("");
        processedName = innerProcess(nameArray);
        joinedName = processedName.join("");
        namesArray[index] = joinedName;
    }
}
function innerProcess(inputArray) {
    let lastLetter = inputArray[inputArray.length - 1];
    lastLetter = lastLetter.toUpperCase();
    inputArray.pop();
    inputArray.push(lastLetter);
    return inputArray;
}
