import CartPage from "./components/CartPage/cartPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NewOrder from "./components/NewOrder/newOrder";
import Header from "./components/Header";
import ConfigurationPage1 from "./components/ConfigurationPage1/configPage1";
import ConfigurationPage2 from "./components/ConfigurationPage2";
import PlaceOrder from "./components/PlaceOrder/placeOrder";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<CartPage />} />
        <Route exact path="/new-order" element={<NewOrder />} />
        <Route exact path="/configuration-1" element={<ConfigurationPage1 />} />
        <Route exact path="/configuration-2" element={<ConfigurationPage2 />} />
        <Route exact path="/place-order" element={<PlaceOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
