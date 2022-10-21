import { useState } from "react";
import "./App.css";
import AddProduct from "./components/AddProduct";
import Inventory from "./components/Inventory";
import ShopInventory from "./components/ShopInventory";

function App() {

  const [products, setProducts] = useState([])
  const [shop, setShop] = useState([])
  const [inventorySelected, setInventorySelected] = useState(0)

  function addProd(photo) {
    const price = Math.ceil(Math.random() * 100)

    const newProd = {
      photo,
      price
    }

    setProducts([...products, newProd])
  }

  function sellProd() {

  }



  return (
    <div className="App">
      <AddProduct addProd={addProd} />
      <div className="prodContainer">
        <Inventory sellProd={sellProd} products={products} selected={inventorySelected} setSelected={setInventorySelected} />
      </div>

      <div className="prodContainer">
        <ShopInventory />
      </div>
    </div>
  );
}

export default App;
