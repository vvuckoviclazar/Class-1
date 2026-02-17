import "./index.css";
import Products from "./Components/Products.jsx";
import { useState } from "react";

function clickOnButton() {
  console.log("Works");
}

function App() {
  let [name, setName] = useState("Hello World");
  let [tax, setTax] = useState(0);

  return (
    <>
      <Products tax={tax} />

      <h1>My name is Hello World</h1>

      <button onClick={clickOnButton}>{name}</button>

      <input type="text" onInput={(e) => setName(e.target.value)} />

      <input
        placeholder="Enter new tax"
        type="number"
        onInput={(e) => setTax(e.target.value)}
      />
    </>
  );
}

export default App;
