import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

export const ProductCard = ({ item }) => {
  let product = item;
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea href={`/productos/${product.id}`}>
          <CardMedia component="img" height="140" image={product.image} />
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
        </CardActionArea>
        <CardActions disableSpacing>
          <Stack direction="row" spacing={2}>
            <Link to={`/productos/${product.id}`}>
              <Button
                size="small"
                color="primary"
                variant="contained"
                startIcon={<VisibilityIcon />}
              >
                Ver detalle
              </Button>
            </Link>
            <Link to={`/comprar/${product.id}`}>
              <Button
                size="small"
                color="primary"
                variant="contained"
                startIcon={<ShoppingCartIcon />}
              >
                Comprar
              </Button>
            </Link>
          </Stack>
        </CardActions>
      </Card>
    </div>
  );
};
