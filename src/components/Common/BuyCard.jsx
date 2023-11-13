import {
  Button,
  Card,
  CardContent,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { Link } from "react-router-dom";

export const BuyCard = ({ product }) => {
  console.log(product);

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
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

      <div>
        <ImageList sx={{ width: 500, height: 450 }} cols={2} rowHeight={200}>
          {product?.listPhotos?.map((photo, index) => (
            <ImageListItem key={index}>
              <img srcSet={`${photo}`} src={`photo ${index}`} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
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
    </div>
  );
};
