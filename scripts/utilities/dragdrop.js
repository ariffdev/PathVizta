

export function activateDragAndDrop(worldGridState){
  //Make sure this function is only called after the grid is rendered

  // Creating accessors to the start and goal icons
  const startIcon = document.getElementById('start-cell-icon');
  const goalIcon = document.getElementById('goal-cell-icon');



  startIcon.addEventListener('dragstart', dragStart);


  function dragStart(e){
    //console.log('drag starts...')
  }
}