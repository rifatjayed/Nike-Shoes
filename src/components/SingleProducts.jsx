import React from "react";
import { useParams } from "react-router";
import all_product from "../Data/all_products";
import ProductDisplay from "./ProductDisplay";
import Description from "./Description";

const SingleProducts = () => {
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <ProductDisplay product={product}></ProductDisplay>

      <Description></Description>
    </div>
  );
};

export default SingleProducts;
