import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const initialState = {
  data: [],
  oneProduct: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, data: action.payload };
    case "GET_ONE":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  const [inputValues, setInputValues] = useState([]);
  const API =
    "https://api-crud.elcho.dev/api/v1/6e68bc81c9a4ecdf36cf2daee0180517/product";
  const [state, dispatch] = useReducer(reducer, initialState);

  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
  }
  async function readProduct() {
    let { data } = await axios.get(API);
    dispatch({
      type: "GET",
      payload: data.data,
    });
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    readProduct();
  }

  async function getOneProduct(id) {
    let data = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_ONE",
      payload: data.data,
    });
  }

  async function editProduct(id, editedProduct) {
    delete editedProduct._id;
    await axios.patch(`${API}/${id}`, editedProduct);
    readProduct();
  }

  // function filterProduct(value) {
  //   if (value === "mac") {
  //     let result = state.data.filter((item) => item.category === "mac");
  //     dispatch({
  //       type: "GET",
  //       payload: result,
  //     });
  //   } else if (value === "watch") {
  //     let result = state.data.filter((item) => item.category === "watch");
  //     dispatch({
  //       type: "GET",
  //       payload: result,
  //     });
  //   } else if (value === "phone") {
  //     let result = state.data.filter((item) => item.category === "phone");
  //     dispatch({
  //       type: "GET",
  //       payload: result,
  //     });
  //   } else if (value === "all") {
  //     readProduct();
  //   }
  // }
  const initialValue = {
    title: "",
    category: "",
  };

  const handlerInput = () => {
    addProduct(setInputValues);
    setInputValues(initialValue);
  };

  const values = {
    handlerInput,
    addProduct,
    readProduct,
    data: state.data,
    oneProduct: state.oneProduct,
    deleteProduct,
    getOneProduct,
    editProduct,
    // filterProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
