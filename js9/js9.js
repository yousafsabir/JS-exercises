function countInArray(array, element) {
    let repeat_count = 0;
    array.forEach((letter) => {
        if (letter === element) {
            repeat_count++;
        }
    });
    return repeat_count;
}

function getRptdNdUnrptd() {
    let present = [];
    initialWord.forEach((letter) => {
        repeats = countInArray(initialWord, letter);
        if (repeats > 1 && !present.includes(letter)) {
            repeatWord.push(Array(repeats).fill(letter));
            present.push(letter);
        } else if (repeats === 1) {
            word.push(letter);
        }
    });
}
