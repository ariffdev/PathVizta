import blockMobile from './utilities/blockMobile.js'
import {renderWorldGrid, readWorldGridState} from './grid/gridUtilities.js'

const grid_parameters = {
  //do not exceed 20 rows and 54 columns
  'rows': 20,
  'columns': 54,
  'gridSquareSize': 30 //px
}

//blockMobile(); // Block functionality on mobile devices
let worldGridState = renderWorldGrid(grid_parameters.rows, grid_parameters.columns, grid_parameters.gridSquareSize); 


worldGridState = readWorldGridState(grid_parameters.rows, grid_parameters.columns)
