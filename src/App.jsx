import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import { About } from "./pages/About";
import { Orders } from "./pages/Orders";
import Header from "./components/Header";
import Products from "./pages/Products";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
};
