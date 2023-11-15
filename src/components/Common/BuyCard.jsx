import React from "react";
import { ImageGrid } from "./ImageGrid";
import { ProductDetailCard } from "./ProductDetailCard";

export const BuyCard = ({ product }) => {
  console.log(product);

  return (
    <div>
      <ProductDetailCard product={product} />
      <div>
        <ImageGrid product={product} />
      </div>
    </div>
  );
};
