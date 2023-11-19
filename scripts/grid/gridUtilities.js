// Renders the world grid onto the DOM
export function renderWorldGrid(worldGridParameters){
  // Creating accessor for the grid container
  const worldGridContainer = document.getElementById('world-grid-container');

  const worldGrid = document.createElement('div');
  worldGrid.setAttribute('class', 'world-grid');
  worldGrid.setAttribute('id', 'world-grid');
  worldGridContainer.appendChild(worldGrid);
  
  // Rendering world grid to DOM
  for (let row = 0; row < worldGridParameters.rows; row++ ){
    for (let column = 0; column < worldGridParameters.columns; column++ ){
      const gridItem = document.createElement('div');
      gridItem.setAttribute('class', 'grid-item')
      gridItem.setAttribute('id', `${row}-${column}`);
      gridItem.style.height = worldGridParameters.gridSquareSize;
      gridItem.style.width = worldGridParameters.gridSquareSize;
      
      if(row === worldGridParameters.defaultStartCell.row & column === worldGridParameters.defaultStartCell.column){
        gridItem.setAttribute('data-celltype', 'start'); // initialize default start cell
        gridItem.innerHTML = worldGridParameters.startCellIcon;
      }else if(row === worldGridParameters.defaultGoalCell.row & column === worldGridParameters.defaultGoalCell.column){
        gridItem.setAttribute('data-celltype', 'goal'); // initialize default goal cell
        gridItem.innerHTML = worldGridParameters.goalCellIcon;
      }else{
        gridItem.setAttribute('data-celltype', 'empty'); // initialize all other cells as empty
      }
      worldGrid.appendChild(gridItem);
      worldGrid.style.gridTemplateColumns = (String(worldGridParameters.gridSquareSize) + "px ").repeat(worldGridParameters.columns)
    }
  }
  // allowObstacleDrawing(); // allow obstacle drawing
  // allowMovingStartAndGoalCells(); //allow moving start and goal cells
  allowObstacleDrawingAndMovingStartAndGoalCells(worldGridParameters);
}


export function readWorldGridState(worldGridParameters){
  const worldGrid = document.getElementById('world-grid')
  let currentWorldGridState = [];

  for (let row = 0; row < worldGridParameters.rows; row++ ){
    // Create a row with the required columns, filling with zeros by default
    currentWorldGridState.push(Array(worldGridParameters.columns).fill(0));
    // Index each cell in the newly created column and populate them with the DOM element's celltype value
    for (let column = 0; column < worldGridParameters.columns; column++ ){
      currentWorldGridState[row][column] = document.getElementById(`${row}-${column}`).dataset.celltype; //store just the cell type
    }
  }
  return currentWorldGridState;
}

// function allowObstacleDrawing(){
//   let gridItems = document.getElementsByClassName('grid-item')
//   gridItems = Array.from(gridItems) //Create array from HTMLCollections object


//   let drawObstaclesActive = false;
//   document.getElementById('world-grid-container').onmousedown = () => (drawObstaclesActive = !drawObstaclesActive); // Start drawing from a click and stop when there is another click

//   gridItems.forEach((currentItem) => {
//     currentItem.addEventListener('mouseover', (event) => {
//       if(drawObstaclesActive === true){ // && event.id.target.id !== 'start-cell-icon' && event.target.id !== 'goal-cell-icon'
//         if(currentItem.dataset.celltype === 'empty'){
//           currentItem.dataset.celltype = 'obstacle';
//           currentItem.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--obstacle-color'); // get obstacle color from stylesheet
//         }else if(currentItem.dataset.celltype = 'obstacle'){
//           currentItem.dataset.celltype = 'empty';
//           currentItem.style.backgroundColor = ''; //remove the style object and revert to default
//         }else{ //if start and goal cells, do nothing
//           null
//         }
//       }
//       })
//     })
//   } 


// function allowMovingStartAndGoalCells(){
//   let gridItems = document.getElementsByClassName('grid-item')
//   gridItems = Array.from(gridItems) //Create array from HTMLCollections object


//   let moveStartCell = false;
//   let moveGoalCell = false;

//   document.getElementById('start-cell-icon').onmousedown = (event) => {
//     document.getElementById('start-cell-icon').parentNode.setAttribute('data-celltype', 'empty'); //change state of old start cell
//     document.getElementById('start-cell-icon').parentNode.innerHTML = ''; //empty contents of old start cell
//     moveStartCell = true; // Move start cell from a click and to where the next click happens
//   }

//   if(moveStartCell === true){
//     gridItems.forEach((currentItem) => {
//       currentItem.addEventListener('click', () => {
//           if(currentItem.dataset.celltype === 'empty'){
//             currentItem.dataset.celltype = 'start';
//             currentItem.style.backgroundColor = 'green'; // get obstacle color from stylesheet
//             moveStartCell = false;
//           }else if(currentItem.dataset.celltype = 'obstacle'){
//             currentItem.dataset.celltype = 'empty';
//             currentItem.style.backgroundColor = ''; //remove the style object and revert to default
//           }else{ //if start and goal cells, do nothing
//             null
//           }
//         })
//       })
//     }
// }

function allowObstacleDrawingAndMovingStartAndGoalCells(worldGridParameters){
  let gridItems = document.getElementsByClassName('grid-item')
  gridItems = Array.from(gridItems) //Create array from HTMLCollections object


  var drawObstaclesActive = false;
  var moveStartCell = false;
  var moveGoalCell = false;


  document.getElementById('world-grid-container').onmousedown = (event) => {
    console.log(event.target.id);
    // Logic to decide which of the three actions to activate
    if(event.target.id !== 'start-cell-icon' && event.target.id !== 'goal-cell-icon' && event.target.id !== 'start-cell-icon-path' && event.target.id !== 'goal-cell-icon-path'){
      drawObstaclesActive = !drawObstaclesActive;
    }else if(event.target.id === 'start-cell-icon' || event.target.id === 'start-cell-icon-path' ){
      document.getElementById('start-cell-icon').parentNode.setAttribute('data-celltype', 'empty'); //change state of old start cell
      document.getElementById('start-cell-icon').parentNode.innerHTML = ''; //empty contents of old start cell
      moveStartCell = true; // Move start cell from a click and to where the next click happens
    }else if(event.target.id === 'goal-cell-icon' || event.target.id === 'goal-cell-icon-path'){
      document.getElementById('goal-cell-icon').parentNode.setAttribute('data-celltype', 'empty'); //change state of old goal cell
      document.getElementById('goal-cell-icon').parentNode.innerHTML = ''; //empty contents of old goal cell
      moveGoalCell = true; // Move goal cell from a click and to where the next click happens
    }
  }

  gridItems.forEach((currentItem) => {
    // For drawing obstacles
    currentItem.addEventListener('mouseover', (event) => {
      if(drawObstaclesActive === true){ // && event.id.target.id !== 'start-cell-icon' && event.target.id !== 'goal-cell-icon'
        if(currentItem.dataset.celltype === 'empty'){
          currentItem.dataset.celltype = 'obstacle';
          currentItem.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--obstacle-color'); // get obstacle color from stylesheet
        }else if(currentItem.dataset.celltype = 'obstacle'){
          currentItem.dataset.celltype = 'empty';
          currentItem.style.backgroundColor = ''; //remove the style object and revert to default
        }else{ //if start and goal cells, do nothing
          null
        }
      }
      })

    // For updating start or goal cell
    currentItem.addEventListener('click', () => { //clicked on new start cell
      if(moveStartCell === true){
        currentItem.dataset.celltype = 'start';
        currentItem.innerHTML = worldGridParameters.startCellIcon;
        drawObstaclesActive = false; // to avoid pre-mature obstacle drawing
        moveStartCell = false; //disable to prevent duplicate start cells
      }else if(moveGoalCell === true){
        currentItem.dataset.celltype = 'goal';
        currentItem.innerHTML = worldGridParameters.goalCellIcon;
        drawObstaclesActive = false; // to avoid pre-mature obstacle drawing
        moveGoalCell = false; //disable to prevent duplicate start cells
      }
      })
  })
}




export function resetWorldGrid(worldGridParameters){
  const worldGridContainer = document.getElementById('world-grid-container');
  worldGridContainer.innerHTML = ''; //removing all grid-container children
  renderWorldGrid(worldGridParameters); //re-rendering world grid
}







