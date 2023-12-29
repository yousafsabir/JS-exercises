// codewars problem: https://www.codewars.com/kata/57037ed25a7263ac35000c80

function generate_link(input) {
    let baseUrl = "http://www.codewars.com/users/";

    let inputArray = input.split("");
    let resultUsername = "";

    for (let i = 0; i < inputArray.length; i++) {
        let element = inputArray[i];
        if (element === " ") {
            resultUsername = resultUsername + "%20";
        } else {
            resultUsername = resultUsername + element;
        }
    }

    let result = baseUrl + resultUsername;

    return result
}

let result = generate_link("matt c  yousaf");

console.log(result)
