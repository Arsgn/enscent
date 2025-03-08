import React, { useState } from "react";
import { useProduct } from "../../../context/ProductContext";
import scss from "./AddProduct.module.scss";

const newProduct = {
  name: "",
  price: "",
  img: "",
  brand: "",
  category: "",
};

const AddProduct = () => {
  const { addProduct } = useProduct();
  const [inputValues, setInputValues] = useState(newProduct);

  const handleInput = (e) => {
    if (e.target.name === " price") {
      let obj = { ...inputValues, [e.target.name]: Number(e.target.value) };
      setInputValues(obj);
    } else {
      let obj = { ...inputValues, [e.target.name]: e.target.value };
      setInputValues(obj);
    }
  };

  const handleSubmit = () => {
    addProduct(inputValues);
    setInputValues(newProduct);
  };

  return (
    <div className={scss.add}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block}>
            <h2>PRODUCT INFORMATION</h2>
          </div>
          <div className={scss.box}>
            <div className={scss.play}>
              <p>PRODUCT IMAGE</p>
              <p>PRODUCT NAME:</p>
              <p>PRODUCT PRICE:</p>
              <p>PRODUCT BRAND:</p>
              <p>NO.OF BATCHES AVAILABLE:</p>
            </div>
            <div className={scss.inputs}>
              <input onChange={(e) => handleInput(e)} name="img" type="text" />
              <input onChange={(e) => handleInput(e)} name="name" type="text" />
              <input
                onChange={(e) => handleInput(e)}
                name="price"
                type="text"
              />
              <input
                onChange={(e) => handleInput(e)}
                name="brand"
                type="text"
              />

              <input
                onChange={(e) => handleInput(e)}
                name="category"
                type="text"
              />
            </div>
            <button onClick={handleSubmit}>create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
