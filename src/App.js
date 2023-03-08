
import ConsumiendoApis from "./Components/ConsumiendoApis/ConsumiendoApis";
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { } from "react-router"

function App() {
  return (
  <div>
    <Navbar/>
    <ItemListContainer greeting={"Bienvenidos a Leather & Steel"}/>
    <ConsumiendoApis />    
    <Footer/>
  </div>
  )
}

export default App;
