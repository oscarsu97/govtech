import React from "react";

const Product = ({ id, name, description, link, categories, docs }) => {
  return (
    <div className="product">
      <a href={link}>{name}</a>
      <span>{categories}</span>
      <h4>
        <u>Description</u>
      </h4>
      <p>{description}</p>
      <h4>
        <u>Documents</u>
      </h4>
      {!docs
        ? ""
        : docs.map((doc) => {
            return <p>{doc}</p>;
          })}
    </div>
  );
};

export default Product;
