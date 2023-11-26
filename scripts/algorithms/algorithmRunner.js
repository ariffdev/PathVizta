import { aStar } from './aStar.js'
import { dijkstra } from './dijkstra.js'
import { dStarLite } from './dStarLite.js'
import { freezeGridChanges } from '../grid/gridUtilities.js';

export function algorithmRunner(inputData){
  // Freeze the grid state to stop user from making changes
  freezeGridChanges();

  // Select algorithm
  switch(inputData.selectedAlgorithm) {
    case 'dijkstra':
      dijkstra(inputData);
      break;
    case 'a-star':
      aStar(inputData);
      break;
    case 'd-star-lite':
      dStarLite(inputData);
      break;
  }
}

