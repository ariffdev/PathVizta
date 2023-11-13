import Header from "./components/Header";
import Content from "./components/Content";

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
        <Header/>
        <Content/>
      </div>
    )
  }
}

export default App;