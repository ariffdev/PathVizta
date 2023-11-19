import { visualizationRunner } from '../visualisation/visualizationRunner.js'

`
To be called in algorithmRunner() function from algorithmRunner.js

Expected Input: worldGridState => 2D-array of rows and columns storing possible values of 'empty', 'obstacle', 'start' or 'goal'

Expected Outputs:
  (i) visitedCells => an array of all visited cells in search process. Will always start with start cell and end with goal if successful or terminate if no path available
  (ii) shortestPath => an array of the shortest path discovered by the algorithm

  Store cells as (row, column) tuples
`


export function dijkstra(worldGridState){



 // visualizationRunner(algorithmOutput, inputData.visualizationSpeed); // Run the visualization. May need to wait for algorithm runner to finish? async await?
}