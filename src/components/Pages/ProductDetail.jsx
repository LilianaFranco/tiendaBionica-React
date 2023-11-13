import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { ProductDetailCard } from "../Common/ProductDetailCard";
import { Box } from "@mui/material";

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  console.log("id:", id);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/products/${id}`);
        console.log("data:", res);
        if (res.data) {
          setProduct(res.data);
        } else {
          console.log("Product not found or response is empty.");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  console.log(product);
  return (
    <div>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "700px",
        }}
      >
        <ProductDetailCard product={product} />
      </Box>
    </div>
  );
};
