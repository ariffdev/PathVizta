
const blockMobile = () => {
  if(window.innerWidth < 1000){
    document.body.innerHTML = 
    `
    <h1 class='Mobile'> 
      Mobile Devices Not Supported
    </h1>
    `
  }
}

export default blockMobile;