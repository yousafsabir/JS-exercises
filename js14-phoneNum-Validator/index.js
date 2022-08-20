// Test Cases
// telephoneCheck("555-555-5555") should return a boolean.
// telephoneCheck("1 555-555-5555") should return true.
// telephoneCheck("1 (555) 555-5555") should return true.
// telephoneCheck("5555555555") should return true.
// telephoneCheck("555-555-5555") should return true.
// telephoneCheck("(555)555-5555") should return true.
// telephoneCheck("1(555)555-5555") should return true.
// telephoneCheck("555-5555") should return false.
// telephoneCheck("5555555") should return false.
// telephoneCheck("1 555)555-5555") should return false.
// telephoneCheck("1 555 555 5555") should return true.
// telephoneCheck("1 456 789 4444") should return true.
// telephoneCheck("123**&!!asdf#") should return false.
// telephoneCheck("55555555") should return false.
// telephoneCheck("(6054756961)") should return false.
// telephoneCheck("2 (757) 622-7382") should return false.
// telephoneCheck("0 (757) 622-7382") should return false.
// telephoneCheck("-1 (757) 622-7382") should return false.
// telephoneCheck("2 757 622-7382") should return false.
// telephoneCheck("10 (757) 622-7382") should return false.
// telephoneCheck("27576227382") should return false.
// telephoneCheck("(275)76227382") should return false.
// telephoneCheck("2(757)6227382") should return false.
// telephoneCheck("2(757)622-7382") should return false.
// telephoneCheck("555)-555-5555") should return false.
// telephoneCheck("(555-555-5555") should return false.
// telephoneCheck("(555)5(55?)-5555") should return false.
// telephoneCheck("55 55-55-555-5") should return false.
// telephoneCheck("11 555-555-5555") should return false.

function telephoneCheck(str) {
    // stripping off spaces
    str = str.replace(/[\s]/gm, "");
    // if str contains other than -, (, ) special characters
    if (/[^0-9-()]/gm.test(str)) {
        console.log("contains other special character");
        return false;
    }
    // if str contains more than 11 or less than 10 numbers
    let test2 = str.replace(/[^0-9]/gm, "");
    if (test2.length < 10 || test2.length > 11) {
        console.log("str < 10 or str > 11");
        return false;
    }
    // if str.length is 11 then first number should be 1
    if (test2.length === 11) {
        if (str[0] !== "1") {
            console.log("first number is not 1");
            return false;
        } else if (str[0] === "1") {
            console.log("here in 1");
            // if its one, then we're gonna strip it off along with all the spaces
            str = str.split("");
            str.shift();
            str = str.join("");
        }
    }
    // if it contains brackets
    if (/[()]/gm.test(str)) {
        // brackets & "-" must be at certain places
        if (str[0] === "(" && str[4] === ")" && str[8] === "-") {
            // stripping off brackets & dash and check if they are somewhere else in the string
            str = str.split("");
            str.splice(0, 1);
            str.splice(3, 1);
            str.splice(6, 1);
            str = str.join("");
            if (/[()-]/gm.test(str)) {
                console.log("contains () & - at other than required places");
                return false;
            }
            return true;
        }
        console.log("() & - are not at required locations");
        return false;
    }
    // if it contains only dashes
    if (/[-]/gm.test(str)) {
        // dashes must be at certain locations
        if (str[3] !== "-" && str[7] !== "-") {
            console.log("dashes are not at required places");
            return false;
        }
        // stripping off dashes
        str = str.split("");
        str.splice(3, 1);
        str.splice(6, 1);
        str = str.join("");
        if (/[-]/gm.test(str)) {
            console.log("contains dashes at other than required places");
            return false;
        }
        return true;
    }
    return true;
}

// let a = "123456789123";
console.log(telephoneCheck("(555-555-5555"));
// if (a.length < 10 || a.length > 11) {
//     console.log(a.length);
//     console.log("false");
// } else {
//     console.log(a.length);
//     console.log("true");
// }
