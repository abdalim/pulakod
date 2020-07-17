/**
  Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
  Example:
    Input: [0,1,0,3,12]
    Output: [1,3,12,0,0]
  Note:
    You must do this in-place without making a copy of the array.
    Minimize the total number of operations.
*/

const assert = require('assert')

const swap = (input, from, to) => {
  let temp = input[from]
  input[from] = input[to]
  input[to] = temp
}

const moveZeroesToEnd = (input) => {
  console.log('before', input)

  let i = 0
  while (i < input.length) {
    const prev = i - 1

    if (prev >= 0) {
      if (input[i] > 0 && input[prev] === 0) {
        // we have zero on the left, lets move non-zero currNumber to the front
        swap(input, prev, i)
        i--
      } else if (input[i] > 0 && input[i] < input[prev]) {
        // currNumber < prevNumber
        swap(input, prev, i)
        i--
      } else {
        i++
      }
    } else {
      i++
    }
  }

  console.log('after', input)

  return input
}

let testInput = [0,1,0,3,12]
let testOutput = [1,3,12,0,0]
assert.deepStrictEqual(moveZeroesToEnd(testInput), testOutput, 'Sorted correctly')

testInput = [0,1,0,3,0,12]
testOutput = [1,3,12,0,0,0]
assert.deepStrictEqual(moveZeroesToEnd(testInput), testOutput, 'Sorted correctly')

testInput = [1,3,12,0,0,0]
testOutput = [1,3,12,0,0,0]
assert.deepStrictEqual(moveZeroesToEnd(testInput), testOutput, 'Sorted correctly')

testInput = [0,0,0,12,3,1]
testOutput = [1,3,12,0,0,0]
assert.deepStrictEqual(moveZeroesToEnd(testInput), testOutput, 'Sorted correctly')
