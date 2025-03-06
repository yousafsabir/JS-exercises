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
    let result = ""
    for ([v, k] of arr)  {
        if (num <= 0) break
        while (num >= v) {
            result += k
            num -= v
        }
    }
    return result
}

console.log(intToRoman(1525));
console.log(intToRoman(1950));
