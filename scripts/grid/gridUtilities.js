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
      gridItem.setAttribute('data-celltype', 'empty'); // set all cell types to 'empty' by default
      gridItem.style.height = worldGridParameters.gridSquareSize;
      gridItem.style.width = worldGridParameters.gridSquareSize;
      worldGrid.appendChild(gridItem);
      worldGrid.style.gridTemplateColumns = (String(worldGridParameters.gridSquareSize) + "px ").repeat(worldGridParameters.columns)
    }
  }
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