import React, { useEffect } from "react";
import { useProduct } from "../../../context/ProductContext";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import scss from "./Products.module.scss";

const Products = () => {
  const { readProduct, data, deleteProduct, filterProduct } = useProduct();
  const navigate = useNavigate();
  useEffect(() => {
    readProduct();
  }, []);

  const style = {
    width: "100%",
    maxWidth: "200px",
    border: "2px solid #000",
    padding: "20px",
  };

  return (
    <div className={scss.home}>
      <div className={scss.content}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={(e) => filterProduct(e.target.value)}
          >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel value="mac" control={<Radio />} label="Mac" />
            <FormControlLabel value="phone" control={<Radio />} label="Phone" />
            <FormControlLabel value="watch" control={<Radio />} label="Watch" />
          </RadioGroup>
        </FormControl>
      </div>
      {data.map((item, index) => {
        return (
          <div style={style} key={index}>
            <h4>{item.title}</h4>
            <p>{item.category}</p>
            <button onClick={() => deleteProduct(item._id)}>delete</button>
            <button onClick={() => navigate(`/edit/${item._id}`)}>edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

// <ul>
//   <li>BRAND</li>
//   <li>DIOR</li>
//   <li>VERSACE</li>
//   <li>TOM FORD</li>
// </ul>
// <ul>
//   <li>TYPE</li>
//   <li>ELIXIP</li>
//   <li>COLOGNE</li>
//   <li>PERFUME</li>
//   <li>EAU DE TOILETTE</li>
// </ul>
