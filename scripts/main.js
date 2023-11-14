import blockMobile from './blockMobile.js'
import {generateWorldGrid, readWorldGridState} from './gridUtilities.js'

const grid_parameters = {
  //do not exceed 20 rows and 54 columns
  'rows': 20,
  'columns': 54,
  'gridSquareSize': 30 //px
}

//blockMobile();
let worldGridState = generateWorldGrid(grid_parameters.rows, grid_parameters.columns, grid_parameters.gridSquareSize); 
