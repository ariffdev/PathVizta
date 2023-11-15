import blockSmallScreens from './utilities/blockSmallScreens.js'
import {renderWorldGrid, readWorldGridState} from './grid/gridUtilities.js'

const worldGridParameters = {
  //do not exceed 20 rows and 54 columns
  'rows': 22,
  'columns': 54,
  'gridSquareSize': 30, //px
  'defaultStartCell': {'row': 10, 'column': 20},
  'defaultGoalCell': {'row': 10, 'column': 35}
}

//blockSmallScreens(); // Block functionality on Small-Screen devices
renderWorldGrid(worldGridParameters); 


let worldGridState = readWorldGridState(worldGridParameters)
