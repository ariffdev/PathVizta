
const blockSmallScreens = () => {
  if(window.innerWidth < 1600){
    document.body.innerHTML = 
    `
    <h1 class='Small-Screen'> 
      Small Screens Not Supported
    </h1>
    `
  }
}

export default blockSmallScreens;