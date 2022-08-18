// Test Cases
// palindrome("eye") should return a boolean.
// palindrome("eye") should return true.
// palindrome("_eye") should return true.
// palindrome("race car") should return true.
// palindrome("not a palindrome") should return false.
// palindrome("A man, a plan, a canal. Panama") should return true.
// palindrome("never odd or even") should return true.
// palindrome("nope") should return false.
// palindrome("almostomla") should return false.
// palindrome("My age is 0, 0 si ega ym.") should return true.
// palindrome("1 eye for of 1 eye.") should return false.
// palindrome("0_0 (: /-\ :) 0-0") should return true.
// palindrome("five|\_/|four") should return false.

function removeSpace(str) {
    return str.replace(/\s+/g, "");
}

function removeSpecial(str) {
    return str.replace(/[^a-zA-Z0-9]/g, "");
}

function palindrome(str) {
    let lowerCase = str.toLowerCase();
    let spacesRipped = removeSpace(lowerCase);
    let clean = removeSpecial(spacesRipped);
    for (let i = 0; i < clean.length; i++) {
        if (clean[i] !== clean[clean.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

const a = palindrome("A man, a plan, a canal. Panama");
console.log(a);
