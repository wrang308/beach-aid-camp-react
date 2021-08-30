import NavbarComponent from "../NavBar/Navbar";
//import StartCarousel from "./StartCarousel";
import Slider from "./Slider"

const StartPage = () => {
    
    return (
        
      <div>
          <NavbarComponent/>
          <div style={{marginTop:"56px", position:"relative"}} >
          <Slider/>
          
          <div>
          Beach aid camp
          </div>

          </div>
       
      </div>
    )
  }
  
  export default StartPage;