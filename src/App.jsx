import Header from "./components/Header";
import Content from "./components/Content";
import Visualizer from "./visualization/Visualizer";
import Controller from "./control/Controller"

const App = () => {
  if(window.innerWidth < 1000){
    return(
        <div className="Mobile">
          Mobile Devices Not Supported
        </div>
    )
  }else{
    return(
      <div className="App">
        {/* Base UI Components */}
        <Header/>
        <Content/>

        {/* Control Flow Components -> will render nothing but will control the flow of the program */}
        <Controller/>


        {/* Visualization Engine */}
        <Visualizer/>

      </div>
    )
  }
}

export default App;