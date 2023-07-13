import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import ShoppingCartContext from "./context/ShoppingCartContext";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <ShoppingCartContext>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/catalogue" element={<ItemListContainer />} />
            <Route
              exact
              path="/category/:category"
              element={<ItemListContainer />}
            />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </ShoppingCartContext>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
