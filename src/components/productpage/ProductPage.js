import React from "react";
import "./productpage.css";
import ProductOne from "../productdata/ProductOne";
import ProductTwo from "../productdata/ProductTwo";
import ProductThree from "../productdata/ProductThree";
import ProductFour from "../productdata/ProductFour";
import ProductFive from "../productdata/ProductFive";
import ProductSix from "../productdata/ProductSix";

const ProductPage = () => {
  return (
    <>
      <div className="productpage">
        <div className="product-card">
          <div className="product-card1">
            <ProductOne />
            <ProductTwo />
            <ProductThree />
          </div>
          <div className="product-card1">
            <ProductFour />
            <ProductFive />
            <ProductSix />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
