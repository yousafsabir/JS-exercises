function matchingPalindrome(str) {
    // if its a string of same letters
    let a = str[0];
    let pattern = new RegExp(`[^${a}]`, "gm");
    if (!pattern.test(str)) {
        console.log("string of same letters");
        return a;
    }
    // lets first check if its even a palindrome
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            console.log("not even a palindrome");
            return false;
        }
    }
    // we have a palindrome, now we are going to cut it into smaller pieces to get shortest piece that makes a palindrome
    let pieces = [];
    for (let i = 0; i < str.length; i++) {
        let isPalindrome = true;
        let piece = str.split("");
        piece.splice(0, i);
        piece = piece.join("");
        for (let i = 0; i < piece.length; i++) {
            if (piece[i] !== piece[piece.length - 1 - i]) {
                isPalindrome = false;
                break;
            }
        }
        if (isPalindrome) {
            pieces.push(piece);
        }
    }
    console.log(pieces);
    // returning minimum length palindrome
    return pieces[pieces.length - 2];
}
console.log(matchingPalindrome("abbaabbaabbaabba"));
