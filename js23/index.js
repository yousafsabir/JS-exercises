// codewars problem: https://www.codewars.com/kata/57faf7275c991027af000679

// Problem Statement:
//      Remove n exclamation marks in the sentence from left to right. n is positive integer.
// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

function removeExclamation(input, count) {
    return input
        .split("")
        .filter((element) => {
            if (element === "!" && count !== 0) {
                count--;
                return false;
            } else {
                return true;
            }
        })
        .join("");
}

console.log(removeExclamation("!!!Hi !!hi!!! !hi", 4));
