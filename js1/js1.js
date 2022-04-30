// ----------------
let inputStr;
let get = () => {
    let inputStr = document.getElementById("input").value;
    let initialArr = inputStr.split("");
    let finalArr = [];
    for (let index = initialArr.length; index > 0; index--) {
        finalArr.push(initialArr[index - 1]);
    }
    let resultStr = finalArr.join("");
    document.getElementById("result").innerHTML = resultStr;
};
