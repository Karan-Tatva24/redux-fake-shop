import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetail from "./containers/ProductDetail";
import NotFound from "./containers/NotFound";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact Component={ProductListing} />
          <Route path="/product/:productId" Component={ProductDetail} />
          <Route path="/*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
