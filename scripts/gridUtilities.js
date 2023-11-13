


export function generateWorldGrid(rows, columns, gridSquareSize){
  // Creating accessor for the grid container
  const worldGridContainer = document.getElementById('world-grid-container');

  let worldGridState = [];
  for (let row = 0; row < rows; row++) {
    worldGridState.push(Array(columns).fill(0));
  }
  renderWorldGrid(worldGridContainer, rows, columns, gridSquareSize);
  return worldGridState;
}


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