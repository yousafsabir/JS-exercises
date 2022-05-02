let namesArray = [];
let outputArray = [];

function names() {
    let name = document.getElementById("name").value;
    namesArray.push(name);
    document.getElementById("name").value = "";
}
function process() {
    for (let index = 0; index < namesArray.length; index++) {
        let name = namesArray[index];
        name = name.toLowerCase();
        nameArray = name.split("");
        processedName = innerProcess(nameArray);
        console.log(processedName);
        joinedName = processedName.join("");
        outputArray[index] = joinedName;
        document.getElementById("output").innerHTML = `[${outputArray}]`;
    }
}
function innerProcess(inputArray) {
    let lastLetter = inputArray[inputArray.length - 1];
    lastLetter = lastLetter.toUpperCase();
    inputArray.pop();
    inputArray.unshift(lastLetter);
    return inputArray;
}
