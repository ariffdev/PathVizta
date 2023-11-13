import Header from "./components/Header";
import Legend from "./components/Legend";
import WorldGrid from "./components/WorldGrid"
import PathfindingVisualizer from "./control/PathfindingVisualizer"


const App = () => {
  if(window.innerWidth < 1000){
    return(
        <div className="Mobile">
          Mobile Devices Not Supported
        </div>
    )
  }else{
    return(
      <div className="App" id="App">
        {/* Base UI Components */}
        <Header/>
        <Legend/>

        {/* Main Application */}
        <WorldGrid/>
        {/* <PathfindingVisualizer/> */}
      </div>
    )
  }
}

export default App;