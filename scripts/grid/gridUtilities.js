// Renders the world grid onto the DOM
export function renderWorldGrid(rows, columns, gridSquareSize){
  // Creating accessor for the grid container
  const worldGridContainer = document.getElementById('world-grid-container');

  const worldGrid = document.createElement('div');
  worldGrid.setAttribute('class', 'world-grid');
  worldGrid.setAttribute('id', 'world-grid');
  worldGridContainer.appendChild(worldGrid);
  

  for (let row = 0; row < rows; row++ ){
    for (let column = 0; column < columns; column++ ){
      const gridItem = document.createElement('div');
      gridItem.setAttribute('class', 'grid-item')
      gridItem.setAttribute('id', `${row}-${column}`);
      gridItem.setAttribute('data-celltype', 'empty'); // set all cell types to 'empty' by default
      gridItem.style.height = gridSquareSize;
      gridItem.style.width = gridSquareSize;
      worldGrid.appendChild(gridItem);
      worldGrid.style.gridTemplateColumns = (String(gridSquareSize) + "px ").repeat(columns)
    }
  }
}


export function readWorldGridState(rows, columns){
  const worldGrid = document.getElementById('world-grid')
  let currentWorldGridState = [];

  for (let row = 0; row < rows; row++ ){
    // Create a row with the required columns, filling with zeros by default
    currentWorldGridState.push(Array(columns).fill(0));
    // Index each cell in the newly created column and populate them with the DOM element's celltype value
    for (let column = 0; column < columns; column++ ){
      currentWorldGridState[row][column] = document.getElementById(`${row}-${column}`).dataset.celltype; //store just the cell type
    }
  }
  return currentWorldGridState;
}