function isPangram(string) {
    string = string.toLowerCase();
    const refArray = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    for (let i = 0; i < refArray.length; i++) {
        if (!string.includes(refArray[i])) {
            return false;
        }
    }
    return true;
}

const result = isPangram(
    "The quick brwn fx jumps sdf-92315-wa@#$^Q#^@# ver the lazy dg"
);
console.log(result);