import React, { useEffect } from "react";
import { useProduct } from "../../../context/ProductContext";
import { useNavigate } from "react-router-dom";
import scss from "./Products.module.scss";

const Products = () => {
  const { readProduct, data, deleteProduct, filterProduct } = useProduct();
  const navigate = useNavigate();
  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div className={scss.home}>
      <div className={scss.content}>
        <div className={scss.block}>
          <ul>
            <li>CATEGORY</li>
            <li>MALE PERFUMES</li>
            <li>FEMALE PERFUMES</li>
            <li>UNISEX</li>
          </ul>
          <ul>
            <li>BRAND</li>
            <li>DIOR</li>
            <li>VERSACE</li>
            <li>PRADA</li>
            <li>TOM FORD</li>
          </ul>
          <ul>
            <li>TYPE</li>
            <li>ELIXIR</li>
            <li>COLOGNE</li>
            <li>PERFUME</li>
            <li>EAU DE TOILETTE</li>
          </ul>
        </div>
        <div className={scss.blog}>
          {data.map((item, index) => {
            return (
              <div className={scss.box} key={index}>
                <img src={item.img} alt="" />
                <h4>{item.name}</h4>
                <p>{item.price}</p>
                <button onClick={() => deleteProduct(item._id)}>delete</button>
                <button onClick={() => navigate(`/edit/${item._id}`)}>
                  edit
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
