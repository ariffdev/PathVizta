

export function visualizationRunner(algorithmOutput, inputData){
  let visualisationSpeed = inputData.visualisationSpeed;
  let specialCells = inputData.specialCells;

  visualizeSearchProcess(algorithmOutput, specialCells, visualisationSpeed);
  visualizeShortestPath(algorithmOutput, specialCells, visualisationSpeed);

  // consider disabling obstacle addition and start and goal cell changes while visuzalization is running
}

//Simple transitions
function visualizeSearchProcess(algorithmOutput, specialCells, visualisationSpeed){
    let start = specialCells.start;
    let goal = specialCells.goal;
  //Loop through search path and apply visualizing styles to them
  algorithmOutput.visitedCells.forEach((node) => {
    let [row, column] = node;
    if((row !== start[0] || column !== start[1]) && (row !== goal[0] || column !== goal[1])){ // executing only for non-goal / non-start cells
      document.getElementById(`${row}-${column}`).style.backgroundColor = 'green';
      document.getElementById(`${row}-${column}`).style.transition = 'all 1s';
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
      document.getElementById(`${row}-${column}`).style.transition = 'all 5s';
    }
  })
}

// Complex transitions to be returned to. Works in conjunction with visualizations.css
// function visualizeSearchProcess(algorithmOutput, specialCells, visualisationSpeed){
//     let start = specialCells.start;
//     let goal = specialCells.goal;
//   //Loop through search path and apply visualizing styles to them
//   algorithmOutput.visitedCells.forEach((node) => {
//     let [row, column] = node;
//     if((row !== start[0] || column !== start[1]) && (row !== goal[0] || column !== goal[1])){ // executing only for non-goal / non-start cells
//       // document.getElementById(`${row}-${column}`).classList.add('animated-visited-cell');
//       // document.getElementById(`${row}-${column}`).style.animation = 'animatedVisitedCell 1s'
//       document.getElementById(`${row}-${column}`).style.transition = 'scale(5)';
//       // document.getElementById(`${row}-${column}`).style.backgroundColor = 'green';

//     }    
//   })
// }


// function visualizeShortestPath(algorithmOutput, specialCells, visualisationSpeed){
//     let start = specialCells.start;
//     let goal = specialCells.goal;
//   //Loop through search path and apply visualizing styles to them
//   algorithmOutput.shortestPath.forEach((node) => {
//     let [row, column] = node;
//     if ((row !== start[0] || column !== start[1]) && (row !== goal[0] || column !== goal[1])) { // executing only for non-goal / non-start cells
//       document.getElementById(`${row}-${column}`).classList.add('animated-shortest-path-cell');
//       // document.getElementById(`${row}-${column}`).style.transition = 'all 5s';
//     }
//   })
// }





// Consider using both transitions and animations