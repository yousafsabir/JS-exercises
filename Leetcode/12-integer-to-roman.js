const arr = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
];

function intToRoman(num) {
    return arr.reduce((acc, val, idx) => {
        if (num <= 0) return acc;
        if (num >= val[0]) {
            let repeat = idx % 2 === 0 ? Math.floor(num / val[0]) : 1;
            console.log(val[1], repeat * val[0]);
            acc += val[1].repeat(repeat);
            num = idx % 2 === 0 ? num % val[0] : num - val[0];
        }
        return acc;
    }, "");
}

console.log(intToRoman(1525));
console.log(intToRoman(3749));
