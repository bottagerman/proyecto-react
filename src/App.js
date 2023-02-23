
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
  <div>
    <Navbar/>
    <ItemListContainer greeting={"Bienvenidos a Leather & Steel"}/>
    <Footer/>
  </div>
  )
}

export default App;
