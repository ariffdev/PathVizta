import { aStar } from './aStar.js'
import { dijkstra } from './dijkstra.js'
import { dStarLite } from './dStarLite.js'

export function algorithmRunner(inputData){
  console.log(inputData);


  switch(inputData.selectedAlgorithm) {
    case 'dijkstra':
      dijkstra(inputData.worldGridState);
      break;
    case 'a-star':
      aStar(inputData.worldGridState);
      break;
    case 'd-star-lite':
      dStarLite(inputData.worldGridState);
      break;
  }
}

