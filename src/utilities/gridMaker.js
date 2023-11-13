/*

Purpose: Dynamically populates the world grid based on the screen dimensions

*/


const gridMaker = () => {


  // Getting the page dimensions
  const pageHeight = window.innerHeight;
  const pageWidth = window.innerWidth;

  // Accessing the world grid elements
  const worldGridContainer = document.getElementById('world-grid-container');
  const worldGrid = document.getElementById('world-grid');

  // Creating padding on the page
  //worldGridContainer.style.padding = '10px';
}

export default gridMaker;

