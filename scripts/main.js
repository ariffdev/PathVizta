import blockMobile from './blockMobile.js'
import {generateWorldGrid, readWorldGridState} from './gridUtilities.js'

//blockMobile();
let worldGridState = generateWorldGrid(20, 54, 30); //do not exceed 20 rows and 54 columns
console.log(worldGridState)