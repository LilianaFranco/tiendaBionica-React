import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";

import { ImageGrid } from "./ImageGrid";

export const ProductDetailCard = ({ product }) => {
  console.log(product);

  return (
    <div>
      <Card sx={{ width: 500 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="left">
            {`$${product.price} mil pesos`}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="left">
            {`Referencia: ${product.name}`}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="left">
            {product.available ? "Estado: disponible" : "Estado: agotado"}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
