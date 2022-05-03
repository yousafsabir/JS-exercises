function func() {
    // getting input string
    let inputStr = document.getElementById("input").value;
    // declaring output string
    let outputStr = "";

    // using ASCII code to solve this problem
    // a better approach

    for (let index = 0; index < inputStr.length; index++) {
        let characterCode = inputStr.charCodeAt(index);
        if (characterCode >= 97 && characterCode <= 96 + 26) {
            outputStr = outputStr + `${characterCode - 96} `;
        } else if (characterCode >= 65 && characterCode <= 65 + 26) {
            outputStr = outputStr + `${characterCode - 64} `;
        }
    }

    // outputing the output
    document.getElementById("output").innerHTML = outputStr;
}
