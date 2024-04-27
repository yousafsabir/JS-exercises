// kata: https://www.codewars.com/kata/55911ef14065454c75000062/train/javascript

// Multiplying Numbers as Strings

function multiply(a, b) {
    a = removeTrailingZeroes(a);
    b = removeTrailingZeroes(b);

    if (!a.length || !b.length) {
        return "0";
    }

    let result = [];
    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] === "0") continue;
        let carry = 0;
        let innerResult = "";
        for (let j = b.length - 1; j >= 0; j--) {
            if (b[j] === "0") continue;
            let mul = Number(a[i]) * Number(b[j]) + carry;
            if (mul > 9) {
                carry = Math.floor(mul / 10);
                innerResult = mul - carry * 10 + innerResult;
            } else {
                carry = 0;
                innerResult = mul + innerResult;
            }
        }
        if (carry) innerResult = carry + innerResult;
        result.push(
            innerResult.padEnd(innerResult.length + (a.length - i - 1), "0")
        );
    }
    return result.reduce((acc, curr) => add(acc, curr), "0");
}

function add(a, b) {
    if (a.length !== b.length && a.length < b.length) {
        let _a = a;
        a = b;
        b = _a;
    }
    a = a.split("").reverse().join("");
    b = b.split("").reverse().join("");

    let carry = 0;
    let result = [];
    for (let i = 0; i < a.length; i++) {
        let num = Number(a[i]) + Number(b[i] || 0) + carry;
        if (num > 9) {
            carry = Math.floor(num / 10);
            result.unshift(num - carry * 10);
        } else {
            carry = 0;
            result.unshift(num);
        }
    }
    if (carry) result.unshift(carry);
    return result.join("");
}

function removeTrailingZeroes(str) {
    let numFound = false;
    return str
        .split("")
        .filter((v) => {
            if (v === "0" && !numFound) {
                return false;
            } else {
                numFound = true;
                return true;
            }
        })
        .join("");
}

console.log(multiply("24", "24"));
