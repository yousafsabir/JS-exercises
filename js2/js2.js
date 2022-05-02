function func() {
    // getting input string
    let inputStr = document.getElementById("input").value;
    // converting it into an array
    let array = mySplit(inputStr);
    // declaring output string
    let outputStr = "";

    // looping over the array to perform action
    array.forEach((element) => {
        switch (element) {
            case "a":
            case "A":
                outputStr += "1 ";
                break;

            case "b":
            case "B":
                outputStr += "2 ";
                break;

            case "c":
            case "C":
                outputStr += "3 ";
                break;

            case "d":
            case "D":
                outputStr += "4 ";
                break;

            case "e":
            case "E":
                outputStr += "5 ";
                break;

            case "f":
            case "F":
                outputStr += "6 ";
                break;

            case "g":
            case "G":
                outputStr += "7 ";
                break;

            case "h":
            case "H":
                outputStr += "8 ";
                break;

            case "i":
            case "I":
                outputStr += "9 ";
                break;

            case "j":
            case "J":
                outputStr += "10 ";
                break;

            case "k":
            case "K":
                outputStr += "11 ";
                break;

            case "l":
            case "L":
                outputStr += "12 ";
                break;

            case "m":
            case "M":
                outputStr += "13 ";
                break;

            case "n":
            case "N":
                outputStr += "14 ";
                break;

            case "o":
            case "O":
                outputStr += "15 ";
                break;

            case "p":
            case "P":
                outputStr += "16 ";
                break;

            case "q":
            case "Q":
                outputStr += "17 ";
                break;

            case "r":
            case "R":
                outputStr += "18 ";
                break;

            case "s":
            case "S":
                outputStr += "19 ";
                break;

            case "t":
            case "T":
                outputStr += "20 ";
                break;

            case "u":
            case "U":
                outputStr += "21 ";
                break;

            case "v":
            case "V":
                outputStr += "22 ";
                break;

            case "w":
            case "W":
                outputStr += "23 ";
                break;

            case "x":
            case "X":
                outputStr += "24 ";
                break;

            case "y":
            case "Y":
                outputStr += "25 ";
                break;

            case "z":
            case "Z":
                outputStr += "26 ";
                break;

            default:
                break;
        }
    });

    // outputing the output
    document.getElementById("output").innerHTML = outputStr;
}

// Utitlity Functions

function mySplit(inputStr) {
    let outputArr = [];
    for (let index = 0; index < inputStr.length; index++) {
        outputArr[index] = inputStr[index];
    }
    return outputArr;
}
