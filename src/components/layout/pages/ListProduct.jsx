import React from "react";

const ListProduct = (readProduct, deleteProduct) => {
  return (
    <div className="container">
      <div className="list_p">
        {readProduct.length > 0 ? (
          readProduct.map((item, index) => (
            <div key={index}>
              <div className="first">
                <h1>Name: {item.name}</h1>
                <h1>LastName: {item.lastName}</h1>
              </div>
              <button onClick={() => deleteProduct(item.id)}>Delete</button>
              <button>Edit</button>
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default ListProduct;
