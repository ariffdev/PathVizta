import { visualizationRunner } from '../visualization/visualizationRunner.js'

`
To be called in algorithmRunner() function from algorithmRunner.js

Expected Input: worldGridState => 2D-array of rows and columns storing possible values of 'empty', 'obstacle', 'start' or 'goal'

Expected Output Format:
  const algorithmOutput = {
    'visitedCells':   [[10,20],[9,20],[11,20],[10,21],[10,22],[10,23],[10,24],[10,25],[10,26],[10,27],[10,28],[10,29],[10,30],[10,31],[10,32],[10,33],[10,34],[10,35]],
    'shortestPath':   [[10,20],[10,21],[10,22],[10,23],[10,24],[10,25],[10,26],[10,27],[10,28],[10,29],[10,30],[10,31],[10,32],[10,33],[10,34],[10,35]]
  }

  (i) visitedCells => an array of all visited cells in search process. Will always start with start cell and end with goal if successful or terminate if no path available
  (ii) shortestPath => an array of the shortest path discovered by the algorithm

  Store cells as [row, column]

  
`


export function aStar(inputData){
  let worldGridState = inputData.worldGridState;

  class Node {
    constructor(row, column, cost, heuristic) {
      this.row = row;
      this.column = column;
      this.cost = cost;
      this.heuristic = heuristic;
      this.totalCost = cost + heuristic;
      this.parent = null;
    }
  }
  
  function aStar(grid, start, end) {
    const openSet = [start];
    const closedSet = new Set();
  
    while (openSet.length > 0) {
      openSet.sort((a, b) => a.totalCost - b.totalCost);
      const current = openSet.shift();
  
      if (current.row === end.row && current.column === end.column) {
        // Found the path, reconstruct it
        const path = [];
        let node = current;
        while (node !== null) {
          path.unshift({ row: node.row, column: node.column });
          node = node.parent;
        }
        return { visitedCells: Array.from(closedSet), shortestPath: path };
      }
  
      closedSet.add({ row: current.row, column: current.column });
  
      const neighbors = getNeighbors(grid, current);
      for (const neighbor of neighbors) {
        if (closedSet.has({ row: neighbor.row, column: neighbor.column })) {
          continue;
        }
  
        const cost = current.cost + 1; // Assuming a uniform cost for each step
        const existingNode = openSet.find((node) => node.row === neighbor.row && node.column === neighbor.column);
  
        if (!existingNode || cost < existingNode.cost) {
          if (!existingNode) {
            const heuristic = calculateHeuristic(neighbor, end);
            const newNode = new Node(neighbor.row, neighbor.column, cost, heuristic);
            newNode.parent = current;
            openSet.push(newNode);
          } else {
            existingNode.cost = cost;
            existingNode.totalCost = cost + existingNode.heuristic;
            existingNode.parent = current;
          }
        }
      }
    }
  
    // No path found
    return { visitedCells: Array.from(closedSet), shortestPath: [] };
  }
  
  function getNeighbors(grid, node) {
    const neighbors = [];
    const directions = [[-1, 0], [0, -1], [1, 0], [0, 1]]; // Assuming 4-connected grid
  
    for (const dir of directions) {
      const row = node.row + dir[0];
      const column = node.column + dir[1];
  
      if (row >= 0 && row < grid.length && column >= 0 && column < grid[0].length && grid[row][column] !== 1) {
        neighbors.push({ row, column });
      }
    }
  
    return neighbors;
  }
  
  function calculateHeuristic(node, end) {
    // Manhattan distance heuristic
    return Math.abs(node.row - end.row) + Math.abs(node.column - end.column);
  }
  
  // Example usage
  const grid = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];
  
  const start = new Node(0, 0, 0, 0);
  const end = new Node(4, 4, 0, 0);
  
  const result = aStar(grid, start, end);
  console.log("Visited Cells:", result.visitedCells);
  console.log("Shortest Path:", result.shortestPath);
  

  visualizationRunner(algorithmOutput, inputData); // Run the visualization. May need to wait for algorithm runner to finish? async await?
}