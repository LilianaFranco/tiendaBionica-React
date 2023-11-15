import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React, { useContext } from "react";
import { CarContext } from "../../Context/CarContext";

export const ShoppingList = () => {
  const carContext = useContext(CarContext);
  const itemList = carContext.carItems;

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" margin="2rem" align="center" color={"primary"}>
        Lista de compras
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {itemList.map((item) => (
          <React.Fragment key={item.product.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={item.product.name} src={item.product.image} />
              </ListItemAvatar>
              <ListItemText
                primary={`Referencia: ${item.product.name}`}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {`Precio:  $ ${item.product.price} mil pesos`}
                    </Typography>
                    <br />
                    <Typography variant="body2" color="text.secondary">
                      {`Talla: ${item.product.size}`}
                    </Typography>
                  </React.Fragment>
                }
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={""}>
                  <DeleteForeverIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>

            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};
