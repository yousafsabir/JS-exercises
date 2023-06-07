function solution(s) {
    let palindromes = palindromesInString(s);
    console.log(palindromes);
    if (!palindromes.length) {
        return s;
    }
    let biggestPalindromeLen = 0;
    for (let item of palindromes) {
        if (item.subString.length > biggestPalindromeLen) {
            biggestPalindromeLen = item.subString.length;
        }
    }
    let biggestPalindrome = palindromes.find(
        (item, i) => item.subString.length === biggestPalindromeLen
    );
    // popping off biggest palindrome
    let res = s.replace(biggestPalindrome.subString, "");
    if (res.length >= 2) {
        return "";
    }
    return res;
}
solution("codesignal");

function palindromesInString(s) {
    let subStrings = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length - i; j++) {
            let subString = s.substring(j, j + i + 1);
            if (
                subString === subString.split("").reverse().join("") &&
                !subStrings.includes(subString) &&
                subString.length >= 3
            ) {
                subStrings.push({
                    subString,
                    indicies: [j, j + i + 1],
                });
            }
        }
    }
    return subStrings;
}
