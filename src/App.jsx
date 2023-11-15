import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Products } from "./components/Pages/Products";
import { ColorModeProvider } from "./Context/ColorModeContext";
import { Home } from "./components/Pages/Home";
import { ProductDetail } from "./components/Pages/ProductDetail";
import { Navbar } from "./components/Layout/Navbar/Navbar";
import { CarProvider } from "./Context/CarContext";
import { BuyItem } from "./components/Pages/BuyItem";
import { ShoppingList } from "./components/Pages/ShoppingList";

function App() {
  return (
    <>
      <BrowserRouter>
        <CarProvider>
          <ColorModeProvider>
            <Routes>
              <Route element={<Navbar />}>
                <Route path="/" element={<Home />} />
                <Route path="/productos" element={<Products />} />
                <Route path="/productos/:id" element={<ProductDetail />} />
                <Route path="/comprar/:id" element={<BuyItem />} />
                <Route path="/carrito" element={<ShoppingList />} />
                <Route path="*" element={<h1>Not found</h1>} />
              </Route>
            </Routes>
          </ColorModeProvider>
        </CarProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
