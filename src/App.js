import ConsumiendoApis from "./Components/ConsumiendoApis/ConsumiendoApis";
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Cart from "./Components/Cart/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryName" element={<ItemListContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/itemDetail/:id" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
