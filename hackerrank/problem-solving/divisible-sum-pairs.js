// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true

function divisibleSumPairs(n, k, ar) {
  let validPairs = 0

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const sum = ar[i] + ar[j]
      if (sum % k === 0) {
        validPairs++
      }
    }
  }

  return validPairs
}