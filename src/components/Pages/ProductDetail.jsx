import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { ProductDetailCard } from "../Common/ProductDetailCard";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { ImageGrid } from "../Common/ImageGrid";

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
      <Typography
        variant="h4"
        marginTop={"2rem"}
        align="center"
        color={"primary"}
      >
        {`Referencia: ${product.name}`}
      </Typography>
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
        <ImageGrid product={product} />
        <Stack direction="row" spacing={2}>
          <Link to={`/productos`}>
            <Button
              size="small"
              color="primary"
              variant="contained"
              startIcon={<ArrowBackIcon />}
            >
              Volver
            </Button>
          </Link>
          <Link to={`/comprar/${product.id}`}>
            <Button
              size="small"
              color="primary"
              variant="contained"
              startIcon={<ShoppingCartIcon />}
            >
              Agregar al carrito
            </Button>
          </Link>
        </Stack>
      </Box>
    </div>
  );
};
