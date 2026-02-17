import "./index.css";
import Products from "./Components/Products.jsx";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [tax, setTax] = useState(0);

  return (
    <div className="container">
      <Products tax={tax} />

      <div className="mt-2">
        <input
          className="form-control"
          placeholder="Enter new tax"
          type="number"
          onInput={(e) => setTax(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
