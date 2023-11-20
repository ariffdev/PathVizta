import { visualizationRunner } from '../visualisation/visualizationRunner.js'

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


export function dStarLite(inputData){
  let worldGridState = inputData.worldGridState;
  let specialCells = inputData.specialCells;


  const exampleAlgorithmOutput = {
    'visitedCells':   [[10,20],[9,20],[11,20],[10,21],[10,22],[10,23],[10,24],[10,25],[10,26],[10,27],[10,28],[10,29],[10,30],[10,31],[10,32],[10,33],[10,34],[10,35]],
    'shortestPath':   [[10,20],[10,21],[10,22],[10,23],[10,24],[10,25],[10,26],[10,27],[10,28],[10,29],[10,30],[10,31],[10,32],[10,33],[10,34],[10,35]]
  }

 //just the visitedCells for now
   visualizationRunner(exampleAlgorithmOutput, inputData); // Run the visualization. May need to wait for algorithm runner to finish? async await?
 // visualizationRunner(algorithmOutput, inputData); // Run the visualization. May need to wait for algorithm runner to finish? async await?
}