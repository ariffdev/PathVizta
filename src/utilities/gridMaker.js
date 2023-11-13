/*

Purpose: Dynamically populates the world grid based on the screen dimensions

*/

const gridMaker = () => {

  // Getting the page dimensions
  const pageHeight = window.innerHeight;
  const pageWidth = window.innerWidth;

  // Create reference for App
  const App = document.getElementById('App');
  
  // Create World Grid Container
  if(document.getElementById('world-grid-container') === null){ // create only if it doesn't exist
    const WorldGridContainer = document.createElement('section');
    WorldGridContainer.setAttribute('id', 'world-grid-container');
    WorldGridContainer.setAttribute('className', 'world-grid-container');
    App.append(WorldGridContainer);
  }

}

export default gridMaker;