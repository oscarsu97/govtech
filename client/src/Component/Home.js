import React from "react";
import { useState } from "react";
import Product from "./Product";
// import axios from "axios";

const Home = () => {
  const products = [
    {
      product_id: 123,
      product_name: "pen",
      product_description: "for writing",
      product_link: "https://google.com.sg",
      categories: "stationary",
      docs: ["essay pen", "paper"],
    },
    {
      product_id: 124,
      product_name: "pen2",
      product_description: "for speed writing",
      product_link: "https://google.com.sg",
      categories: "stationary",
      docs: ["essay pen", "paper"],
    },
  ];

  const [productList, setProductList] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const getData = () => {
    console.log("fetching data for - " + searchTerm);
    fetch("http://localhost:5000/posts/" + searchTerm)
      .then((res) => res.json())
      .then((data) => setProductList(data))
      .then(console.log(productList));
  };

  return (
    <div className="home">
      <div className="search">
        <input
          type="text"
          placeholder="search.."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={getData}>Search</button>
      </div>
      <div className="product-container">
        {productList.map((product) => {
          return (
            <Product
              key={product.product_id}
              name={product.product_name}
              description={product.product_description}
              link={product.product_link}
              categories={product.categories}
              docs={product.docs}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
