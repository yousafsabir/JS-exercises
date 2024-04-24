// kata: https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript

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
        console.log(Number(a[i]), Number(b[i]));
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

console.log(add("63829983432984289347293874", "90938498237058927340892374089"));

console.log(add("12", "456"));
