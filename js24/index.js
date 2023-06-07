// seven(times(five()));  must return 35
// four(plus(nine()));  must return 13
// eight(minus(three()));  must return 5
// six(dividedBy(two()));  must return 3
function zero(operatoObj = undefined) {
    const myValue = 0;
    if (!operatoObj) return myValue;
    return operation(myValue, operatoObj.value, operatoObj.operator);
}
function one(operatoObj = undefined) {
    const myValue = 1;
    if (!operatoObj) return myValue;
    return operation(myValue, operatoObj.value, operatoObj.operator);
}
function two(operatoObj = undefined) {
    const myValue = 2;
    if (!operatoObj) return myValue;
    return operation(myValue, operatoObj.value, operatoObj.operator);
}
function three(operatoObj = undefined) {
    const myValue = 3;
    if (!operatoObj) return myValue;
    return operation(myValue, operatoObj.value, operatoObj.operator);
}
function four(operatoObj = undefined) {
    const myValue = 4;
    if (!operatoObj) return myValue;
    return operation(myValue, operatoObj.value, operatoObj.operator);
}
function five(operatoObj = undefined) {
    const myValue = 5;
    if (!operatoObj) return myValue;
    return operation(myValue, operatoObj.value, operatoObj.operator);
}
function six(operatoObj = undefined) {
    const myValue = 6;
    if (!operatoObj) return myValue;
    return operation(myValue, operatoObj.value, operatoObj.operator);
}
function seven(operatoObj = undefined) {
    const myValue = 7;
    if (!operatoObj) return myValue;
    return operation(myValue, operatoObj.value, operatoObj.operator);
}
function eight(operatoObj = undefined) {
    const myValue = 8;
    if (!operatoObj) return myValue;
    return operation(myValue, operatoObj.value, operatoObj.operator);
}
function nine(operatoObj = undefined) {
    const myValue = 9;
    if (!operatoObj) return myValue;
    return operation(myValue, operatoObj.value, operatoObj.operator);
}

function plus(value) {
    return { value, operator: "plus" };
}
function minus(value) {
    return { value, operator: "minus" };
}
function times(value) {
    return { value, operator: "multiply" };
}
function dividedBy(value) {
    return { value, operator: "divide" };
}

function operation(value1, value2, operator) {
    let result = 0;
    switch (operator) {
        case "plus":
            result = value1 + value2;
            break;
        case "minus":
            result = value1 - value2;
            break;
        case "multiply":
            result = value1 * value2;
            break;
        case "divide":
            result = value1 / value2;
            break;
        default:
            break;
    }

    return Math.floor(result);
}

console.log(
    seven(times(five())),
    four(plus(nine())),
    eight(minus(three())),
    six(dividedBy(two()))
);
