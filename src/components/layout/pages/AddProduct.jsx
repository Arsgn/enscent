import React, { useState } from "react";
import { useProduct } from "../../../context/ProductContext";

const AddProduct = () => {
  const { addProduct } = useProduct();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    let newProduct = {
      title: title,
      category: category,
    };
    addProduct(newProduct);
  };

  return (
    <>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="title"
      />

      <input
        onChange={(e) => setCategory(e.target.value)}
        type="text"
        placeholder="category"
      />
      <button onClick={handleSubmit}>create</button>
    </>
  );
};

export default AddProduct;
