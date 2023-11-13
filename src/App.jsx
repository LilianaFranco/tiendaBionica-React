import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Products } from "./components/Pages/Products";
import { ColorModeProvider } from "./Context/ColorModeContext";
import { Navbar } from "./Components/Layout/Navbar/Navbar";
import { Home } from "./components/Pages/Home";
import { ProductDetail } from "./components/Pages/ProductDetail";
import { Buy } from "./components/Pages/Buy";

function App() {
  return (
    <>
      <BrowserRouter>
        <ColorModeProvider>
          <Routes>
            <Route element={<Navbar />}>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Products />} />
              <Route path="/productos/:id" element={<ProductDetail />} />
              <Route path="/comprar/:id" element={<Buy />} />
              <Route path="*" element={<h1>Not found</h1>} />
            </Route>
          </Routes>
        </ColorModeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
