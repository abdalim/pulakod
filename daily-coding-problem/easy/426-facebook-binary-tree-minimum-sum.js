/**
  #426
  Easy
  Facebook

  Given a binary tree, return the level of the tree with minimum sum.

            3
          /   \
        1       4
      /       /
    0       1
            /
          20
  
  level with minimum sum = 2 
 */

const findMinimumSumLevel = (treeMap) => {

}

const assert = require('assert')

let testInput = [
  { id: 'a', data: 3, left: 'b', right: 'c' },
  { id: 'b', data: 1, left: 'd' },
  { id: 'd', data: 0 },
  { id: 'c', data: 4, left: 'e'},
  { id: 'e', data: 1, left: 'f' },
  { id: 'f', data: 20 },
]
assert(findMinimumSumLevel(testInput), 2, 'Return correct output for test case 1')