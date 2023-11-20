import { aStar } from './aStar.js'
import { dijkstra } from './dijkstra.js'
import { dStarLite } from './dStarLite.js'

export function algorithmRunner(inputData){


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

