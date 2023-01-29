function toCamelCase(str) {
    str = str.replace(/[-_]/g, " ").split(" ");
    for (let i = 1; i < str.length; i++) {
        let word = str[i];
        word = word.split("");
        word[0] = word[0].toUpperCase();
        str[i] = word.join("");
    }
    return str.join("");
}

console.log(toCamelCase(" "));
console.log(toCamelCase("Hello_world-sir"));
