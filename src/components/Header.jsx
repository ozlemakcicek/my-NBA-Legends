import { Container,Image } from "react-bootstrap"
import nbaLogo from "../assets/nba-logo.png"
const Header=()=>{
return(
<Container> 
<Image src={nbaLogo} width="200px"></Image>
<h1 className="header my-2 font-monospace display-4 fw-bold ">NBA Legends</h1>


</Container>
  
)
    
}

export default Header