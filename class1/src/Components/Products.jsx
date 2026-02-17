import React, { useState } from "react";

function Products(props) {
  let [products, setProducts] = useState({
    "iPhone 14": 1000,
    "iPhone 15": 1250,
    "Samsung S23 Ultra": 1100,
  });

  let [newProductName, setNewProductName] = useState("");
  let [newProductPrice, setNewProductPrice] = useState("");
  let [infoMessage, setInfoMessage] = useState();

  function addProducts() {
    if (newProductName === "") {
      return;
    }

    if (newProductPrice === "") {
      return;
    }

    let newProduct = { [newProductName]: parseInt(newProductPrice) };

    setProducts((currentProducts) => ({
      ...currentProducts,
      ...newProduct,
    }));
  }
  function search(e) {
    const searchTerm = e.currentTarget.value.toLowerCase();
    const productNames = Object.keys(products);
    for (let product in productNames) {
      let productName = productNames[product].toLocaleLowerCase();
      if (searchTerm === productName) {
        setInfoMessage("Uspesno ste pronasli proizvod");
        break;
      } else {
        setInfoMessage("Niste pronasli proizvod");
      }
    }
  }

  return (
    <div>
      <button className="btn btn-danger" onClick={(e) => setProducts({})}>
        Delete Products
      </button>
      <div className="d-flex justify-content-center">
        {Object.entries(products).map(([phone, price]) => (
          <div className="m-2">
            <h5>{phone}</h5>
            <p>${calculateTax(price, props.tax)}</p>
          </div>
        ))}
      </div>
      <p>{infoMessage}</p>
      <input
        className="form-control"
        placeholder="Search product"
        type="text"
        onInput={search}
      />

      <div className="container">
        <h3>Adding products</h3>
        <div className="mt-2">
          <input
            className="form-control"
            onInput={(e) => setNewProductName(e.target.value)}
            type="text"
            placeholder="Enter product name"
          />
        </div>
        <div className="mt-2">
          <input
            className="form-control "
            onInput={(e) => setNewProductPrice(e.target.value)}
            type="number"
            placeholder="Enter product price"
          />
        </div>

        <button className="btn btn-primary mt-2 " onClick={addProducts}>
          Add new product
        </button>
      </div>
    </div>
  );
}

function calculateTax(price, tax) {
  return (price * tax) / 100 + price;
}

export default Products;
