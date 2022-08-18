// Roman numerals 	Arabic numerals
// M 	            1000
// CM 	            900
// D 	            500
// CD 	            400
// C 	            100
// XC 	            90
// L 	            50
// XL 	            40
// X 	            10
// IX 	            9
// V 	            5
// IV 	            4
// I 	            1

// Test Cases
// convertToRoman(2) should return the string II.
// convertToRoman(3) should return the string III.
// convertToRoman(4) should return the string IV.
// convertToRoman(5) should return the string V.
// convertToRoman(9) should return the string IX.
// convertToRoman(12) should return the string XII.
// convertToRoman(16) should return the string XVI.
// convertToRoman(29) should return the string XXIX.
// convertToRoman(44) should return the string XLIV.
// convertToRoman(45) should return the string XLV.
// convertToRoman(68) should return the string LXVIII
// convertToRoman(83) should return the string LXXXIII
// convertToRoman(97) should return the string XCVII
// convertToRoman(99) should return the string XCIX
// convertToRoman(400) should return the string CD
// convertToRoman(500) should return the string D
// convertToRoman(501) should return the string DI
// convertToRoman(649) should return the string DCXLIX
// convertToRoman(798) should return the string DCCXCVIII
// convertToRoman(891) should return the string DCCCXCI
// convertToRoman(1000) should return the string M
// convertToRoman(1004) should return the string MIV
// convertToRoman(1006) should return the string MVI
// convertToRoman(1023) should return the string MXXIII
// convertToRoman(2014) should return the string MMXIV
// convertToRoman(3999) should return the string MMMCMXCIX

function convertToRoman(num) {
    let output = "";
    let test = num;
    // for >1000
    if (test >= 1000) {
        let multiplier = Math.trunc(test / 1000);
        for (let i = 1; i <= multiplier; i++) {
            output += "m";
        }
        test %= 1000;
    }
    // for 900+
    if (test >= 900) {
        output += "cm";
        test -= 900;
    }
    // for 500+
    if (test >= 500) {
        output += "d";
        test -= 500;
    }
    // for 400+
    if (test >= 400) {
        output += "cd";
        test -= 400;
    }
    // for 100+
    if (test >= 100) {
        let multiplier = Math.trunc(test / 100);
        for (let i = 1; i <= multiplier; i++) {
            output += "c";
        }
        test %= 100;
    }
    // for 90+
    if (test >= 90) {
        output += "xc";
        test -= 90;
    }
    // for 50+
    if (test >= 50) {
        output += "l";
        test -= 50;
    }
    // for 40+
    if (test >= 40) {
        output += "xl";
        test -= 40;
    }
    // for 10+
    if (test >= 10) {
        let multiplier = Math.trunc(test / 10);
        for (let i = 1; i <= multiplier; i++) {
            output += "x";
        }
        test %= 10;
    }
    // for 9
    if (test === 9) {
        output += "ix";
        test -= 9;
    }
    // for 5+
    if (test >= 5) {
        output += "v";
        test -= 5;
    }
    // for 4+
    if (test >= 4) {
        output += "iv";
        test -= 4;
    }
    // for 1+
    if (test >= 1) {
        for (let i = 1; i <= test; i++) {
            output += "i";
        }
    }
    return output.toUpperCase();
}

let a = convertToRoman(4);
console.log(a);
