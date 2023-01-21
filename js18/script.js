// function sumOfProducts(a) {
//     let sumOfElements = a.reduce((prev, next) => prev + next, 0);
//     let productOfElements = a.reduce((prev, next) => (prev * next), 1);
//     console.log("sum", sumOfElements);
//     console.log("product", productOfElements);
//     let sumOfProductOfElements = 0;
//     function product(array) {
//         let sum = 0;
//         let element = array[0];
//         array.shift();
//         let arr= []
//         for (let i = 0; i < array.length; i++) {
//             sum += element * array[i];
//             arr.push(`${element}x${array[i]}`)
//         }
//         console.log(arr,"=",sum);
//         sumOfProductOfElements += sum;
//         if (array.length > 1) product(array);
//     }
//     if(a.length > 2) product(a);
//     console.log("sum of product", sumOfProductOfElements);
//     return sumOfElements + productOfElements + sumOfProductOfElements;
// }
function sumOfProducts(a) {
    let sumOfProductOfElements = 0;
    function product(array) {
        let sum = array.reduce((prev, next) => prev * next, 1);
        sumOfProductOfElements += sum;
        array.shift();
        if (array.length > 0) product(array);
    }
    product(a);
    return sumOfProductOfElements;
}
let a = sumOfProducts([
    -9, 17, 21, 35, 6, 4, 2, 1, 0, 1, 1, 1, 2, 3, 4, 7, 129,
]);
console.log(a);
