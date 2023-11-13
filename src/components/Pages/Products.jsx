import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../Common/ProductCard";
import { Box, Grid } from "@mui/material";

export const Products = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/products");
        console.log(res.data);
        setItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  console.log("items:", items);

  return (
    <div
      style={{
        margin: "1rem 5rem 0rem 5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          margin: "2rem",
        }}
      >
        Nuestras prendas
      </h1>
      <Box
        sx={{ flexGrow: 1 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};
