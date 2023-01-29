// Test Cases
// rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
// rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
// rot13("SERR YBIR?") should decode to the string FREE LOVE?
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN  FOX JUMPS OVER THE LAZY DOG.

function rot13(str) {
    let output = "";
    str = str.toUpperCase().split("");
    str.forEach((letter) => {
        // Checking if its other than alphabets so we can spare it
        if (!/[A-Z]/.test(letter)) {
            output += letter;
        }
        // main logic
        else {
            let code = letter.charCodeAt(0);
            if (code - 13 < 65) {
                output += String.fromCharCode(90 - (12 - (code - 65)));
            } else {
                output += String.fromCharCode(code - 13);
            }
        }
    });
    return output;
}

console.log(rot13("SERR CVMMN!"));
