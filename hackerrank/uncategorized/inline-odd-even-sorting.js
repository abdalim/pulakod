/**
 * Problem:
 *    Given an array of numbers, sort the array with the:
 *      - odd numbers in the front
 *      - even numbers at the back
 *      - numbers in group sorted in ascending order
 *      - time complexity: O(n)
 *      - space complexity: O(1)
 */

const assert = require('assert')

const oddEvenInlineSort = (input) => {
  console.log('before', input)
  let i = 0
  while (i < input.length) {
    // sort by type
    if (i - 1 >= 0 && shouldGoLeftDueToType(input[i], input[i-1])) {
      swap(input, i, i-1)
      i--
    } else if (
      i - 1 >= 0 &&
      isEven(input[i]) === isEven(input[i-1]) &&
      shouldGoLeftDueToSize(input[i], input[i-1])
    ) {
      swap(input, i, i-1)
      i--
    } else {
      i++
    }
  }

  console.log('after', input)

  return input
}

const isEven = (inputNum) => {
  return inputNum % 2 === 0
}

const swap = (input, from, to) => {
  let temp = input[from]
  input[from] = input[to]
  input[to] = temp
}

const shouldGoLeftDueToType = (currNum, currLeftNum) => {
  return !isEven(currNum) && isEven(currLeftNum)
}

const shouldGoLeftDueToSize = (currNum, currLeftNum) => {
  return currNum < currLeftNum
}

let testInput = [1,2,3,4,5,6,7,8,9,10]
let testOutput = [1,3,5,7,9,2,4,6,8,10]
assert.deepStrictEqual(oddEvenInlineSort(testInput), testOutput, 'Sorted correctly')

testInput = [1,3,5,7,9,2,4,6,8,10]
testOutput = [1,3,5,7,9,2,4,6,8,10]
assert.deepStrictEqual(oddEvenInlineSort(testInput), testOutput, 'Should be the same')

testInput = [10,9,8,7,6,5,4,3,2,1]
testOutput = [1,3,5,7,9,2,4,6,8,10]
assert.deepStrictEqual(oddEvenInlineSort(testInput), testOutput, 'Reverse sorted correctly')

testInput = [10,7,8,9,6,2,4,3,5,1]
testOutput = [1,3,5,7,9,2,4,6,8,10]
assert.deepStrictEqual(oddEvenInlineSort(testInput), testOutput, 'Jumbled sorted correctly')