function solution(number) {
    // since we're checking with 1 number below what's provided
    number -= 1;
    if (number < 0) {
        return 0;
    }
    let checkElement = [3, 5];
    let result = [];
    for (let element of checkElement) {
        let resultantMultiple = (number - (number % element)) / element;
        for (let i = 1; i <= resultantMultiple; i++) {
            result.push(element * i);
        }
    }
    // eliminating duplicates
    console.log(result);
    result = [...new Set(result)];
    console.log(result);
    // Adding elements
    return result.reduce((result, current) => result + current, 0);
}

const result = solution(10);
console.log(result);
