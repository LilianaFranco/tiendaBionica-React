import React, { useEffect, useState } from "react";
import { BuyCard } from "../Common/BuyCard";
import { useParams } from "react-router";
import { Box, Stack } from "@mui/material";
import axios from "axios";
import { BuyForm } from "../Common/BuyForm";

export const Buy = () => {
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
        sx={{ flexGrow: 1 }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Datos de compra</h2>
        <Box
          sx={{ flexGrow: 1 }}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "space-around",
          }}
        >
          <Box>
            <BuyForm product={product} />
          </Box>
          <Box>
            <BuyCard product={product} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};
