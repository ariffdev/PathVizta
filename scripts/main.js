import blockMobile from './utilities/blockMobile.js'
import {renderWorldGrid, readWorldGridState} from './grid/gridUtilities.js'

const worldGridParameters = {
  //do not exceed 20 rows and 54 columns
  'rows': 20,
  'columns': 54,
  'gridSquareSize': 30, //px
  'default_start_cell': '10-20',
  'default_goal_cell': '10-25'
}

//blockMobile(); // Block functionality on mobile devices
let worldGridState = renderWorldGrid(worldGridParameters); 


worldGridState = readWorldGridState(worldGridParameters)
