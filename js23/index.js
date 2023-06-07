// You are given an array of integers a and an integer k. Your task is to calculate the number of ways to pick two different indices i < j, such that a[i] + a[j] is divisible by k.

function solution(a, k) {
    let ways = 0
    for(let i = 0; i < a.length; i++) {
        let subArr = a.slice(i+1, a.length)
        for(let j = 0; j < subArr.length; j++) {
            if((a[i] + subArr[j]) % k === 0) {
                ways++
            }
        }
    }
    return ways
}