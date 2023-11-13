import Header from "./components/Header";

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
      </div>
    )
  }
}

export default App;