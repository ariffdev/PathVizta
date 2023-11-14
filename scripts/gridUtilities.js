

// Function for generating the world grid. Creates and exports the world state and calls another function to render the world grid onto the Document Object Model (DOM)
export function generateWorldGrid(rows, columns, gridSquareSize){
  // Creating accessor for the grid container
  const worldGridContainer = document.getElementById('world-grid-container');

  let worldGridState = createWorldGridStructure(rows, columns);
  renderWorldGrid(worldGridContainer, rows, columns, gridSquareSize);
  return worldGridState;
}

// Renders the world grid onto the DOM. To be invoked from the generateWorldGrid function
function renderWorldGrid(worldGridContainer, rows, columns, gridSquareSize){
  const worldGrid = document.createElement('div');
  worldGrid.setAttribute('class', 'world-grid');
  worldGrid.setAttribute('id', 'world-grid');
  worldGridContainer.appendChild(worldGrid);
  

  for (let row = 0; row < rows; row++ ){
    for (let column = 0; column < columns; column++ ){
      const gridItem = document.createElement('div');
      gridItem.setAttribute('class', 'grid-item')
      gridItem.setAttribute('id', `grid-item-${row}-${column}`);
      gridItem.style.height = gridSquareSize;
      gridItem.style.width = gridSquareSize;
      worldGrid.appendChild(gridItem);
      worldGrid.style.gridTemplateColumns = (String(gridSquareSize) + "px ").repeat(columns)
    }
  }
}

// Create the structure of the World Grid State
function createWorldGridStructure(rows, columns){
  let worldGridArray = [];
  for (let row = 0; row < rows; row++) {
    worldGridArray.push(Array(columns).fill(0));
  }
}

// Function for reading the current world grid state
export function readWorldGridState(rows, columns){
  worldGrid = document.getElementById('world-grid')
  let currentWorldGridState = createWorldGridStructure(rows, columns);

  //Continue with reading the state into the new variable

}