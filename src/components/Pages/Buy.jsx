import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Box, Grid, ListItem, Typography } from "@mui/material";
import axios from "axios";
import { BuyForm } from "../Common/BuyForm";
import { ImageGrid } from "../Common/ImageGrid";

import { ProductDetailCard } from "../Common/ProductDetailCard";

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
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <Typography variant="h4" margin="2rem" align="center" color={"primary"}>
        Datos de compra
      </Typography>

      <Grid container spacing={1} justifyContent={"center"}>
        <Grid item xs={12} md={5}>
          <ImageGrid product={product} />
        </Grid>
        <Grid item xs={12} md={5}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ProductDetailCard product={product} />
            </Grid>
            <Grid item xs={12}>
              <BuyForm product={product} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
