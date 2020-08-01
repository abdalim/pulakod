/**
    #407
    Medium
    Samsung

    A group of houses is connected to the main water plant by means of a set of
    pipes. A house can either be connected by a set of pipes extending directly
    to the plant, or indirectly by a pipe to a nearby house which is otherwise
    connected.

    For example, here is a possible configuration, where A, B, and C are houses,
    and arrows represent pipes:

    A <--> B <--> C <--> plant
    Each pipe has an associated cost, which the utility company would like to
    minimize. Given an undirected graph of pipe connections, return the lowest
    cost configuration of pipes such that each house has access to water.

    In the following setup, for example, we can remove all but the pipes from
    plant to A, plant to B, and B to C, for a total cost of 16.

    pipes = {
      'plant': {'A': 1, 'B': 5, 'C': 20},
      'A': {'C': 15},
      'B': {'C': 10},
      'C': {}
    }

    why?

    options: (total cost: 1 + 15 + 20 + 5 + 10 = 51)

      plant --1-- A --15-- C
      |----------20--------|
      |---5--- B ----10----|

    best configuration: (total cost: 1 + 5 + 10 = 16)

      plant --1-- A        C
      |---5--- B ----10----|

    output = 16

 */

const assert = require('assert')

const getAllConnectedNodes = (graph, source) => {
  return Object.keys(graph[source]).map(key => {
    return graph[key]
  })
}

const traverse = (graph, from, to) => {
  const queue = getAllConnectedNodes(graph, from)

  let cost = -1
  while (queue.length > 0) {
    
  }


  return cost
}

const lowestPipeConnection = (availableConnections) => {

}

let testInput = {
  'plant': {'A': 1, 'B': 5, 'C': 20},
  'A': {'C': 15},
  'B': {'C': 10},
  'C': {}
}
assert.deepStrictEqual(lowestPipeConnection(testInput), 16, 'Connection is optimized')

testInput = {
  'plant': {'A': 1, 'B': 5, 'C': 20},
  'A': {'B': 5, 'C': 15},
  'B': {'C': 10},
  'C': {},
}
assert.deepStrictEqual(lowestPipeConnection(testInput), 16, 'Connection is optimized')