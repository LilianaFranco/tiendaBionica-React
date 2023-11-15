import {
  Alert,
  AlertTitle,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PaymentIcon from "@mui/icons-material/Payment";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CarContext } from "../../Context/CarContext";

export const BuyForm = ({ product }) => {
  console.log(product);

  const carContext = useContext(CarContext);
  const { saveItemInCar } = carContext;

  const [pay, setPay] = useState(false);
  const [size, setSize] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (size) {
      console.log("Selected size:", size);
      saveItemInCar({ product, size });
      setOpen(true);
      setPay(true);
    } else {
      // Show error alert if no size is selected
      setOpen(true);
    }
  };

  console.log(carContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={size ? "success" : "error"}
          sx={{ width: "400px" }}
        >
          <AlertTitle>{size ? "¡Excelente!" : "Error"}</AlertTitle>

          {size
            ? ` El producto talla ${size} fue agregado al carrito.`
            : " Por favor selecciona una talla para continuar."}
        </Alert>
      </Snackbar>

      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Talla"
          value={size}
          helperText="Elije tu talla"
          defaultValue={""}
          onChange={handleSizeChange}
        >
          {product?.sizes?.map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <Stack direction="row" spacing={2} marginTop={"1rem"}>
        <Button
          size="small"
          color="primary"
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          onClick={handleClick}
        >
          Agregar al carrito
        </Button>
        <Link to={`/productos`}>
          <Button
            size="small"
            color="primary"
            variant="contained"
            startIcon={<ShoppingBasketIcon />}
          >
            Seguir comprando
          </Button>
        </Link>

        {pay ? (
          <Link to={`/productos`}>
            <Button
              size="small"
              color="primary"
              variant="contained"
              startIcon={<PaymentIcon />}
            >
              Pagar
            </Button>
          </Link>
        ) : null}
      </Stack>
    </div>
  );
};
