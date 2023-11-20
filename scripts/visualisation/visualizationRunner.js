import { renderWorldGrid } from "../grid/gridUtilities.js";

export function visualizationRunner(algorithmOutput, inputData){
  let visualisationSpeed = inputData.visualisationSpeed;
  let specialCells = inputData.specialCells;

  visualizeSearchProcess(algorithmOutput, specialCells, visualisationSpeed);
  visualizeShortestPath(algorithmOutput, specialCells, visualisationSpeed);

  // consider disabling obstacle addition and start and goal cell changes while visuzalization is running
}



function visualizeSearchProcess(algorithmOutput, specialCells, visualisationSpeed){
    let start = specialCells.start;
    let goal = specialCells.goal;
  //Loop through search path and apply visualizing styles to them
  algorithmOutput.visitedCells.forEach((node) => {
    let [row, column] = node;
    if((row !== start[0] || column !== start[1]) && (row !== goal[0] || column !== goal[1])){ // executing only for non-goal / non-start cells
      document.getElementById(`${row}-${column}`).style.backgroundColor = 'green';
    }    
  })
}


function visualizeShortestPath(algorithmOutput, specialCells, visualisationSpeed){
    let start = specialCells.start;
    let goal = specialCells.goal;
  //Loop through search path and apply visualizing styles to them
  algorithmOutput.shortestPath.forEach((node) => {
    let [row, column] = node;
    if ((row !== start[0] || column !== start[1]) && (row !== goal[0] || column !== goal[1])) { // executing only for non-goal / non-start cells
      document.getElementById(`${row}-${column}`).style.backgroundColor = 'yellow';
    }
  })
}