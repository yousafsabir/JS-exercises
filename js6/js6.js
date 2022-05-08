function process() {
    let input = document.getElementById("input").value;
    inputArray = input.split("");
    let repeats = 0;
    let repeatIndex = [];
    for (let i = 0; i < inputArray.length; i++) {
        const element = inputArray[i];
        let newRepeats = 0;
        for (let j = 0; j < inputArray.length; j++) {
            const newElement = inputArray[j];
            if (element === newElement) {
                if (repeatIndex.includes(j)) {
                } else {
                    repeatIndex.push(j);
                    newRepeats += 1;
                }
            }
        }
        console.log(newRepeats);
        console.log(repeatIndex);
        if (newRepeats >= 2) {
            repeats += 1;
        }
    }
    document.getElementById(
        "output"
    ).innerHTML = `There are total ${repeats} repeats`;
}
