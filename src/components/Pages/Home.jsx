import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import { Box, Button } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "700px",
      }}
    >
      <div>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "3em" }}>Bienvenidos a Biónica</h1>
          <Link style={{ textDecoration: "none" }} to={`/productos`}>
            <Button variant="contained" startIcon={<DryCleaningIcon />}>
              ingresar
            </Button>
          </Link>
        </Box>
      </div>
      <div>
        <img
          src="https://www.plasmanodo.com/wp-content/uploads/2020/01/Bionica-6.jpg"
          alt=""
          style={{
            maxWidth: "100%",
            height: "auto",
            maxHeight: "500px",
            marginTop: "30px",
          }} // Adjust image size
        />
      </div>
    </div>
  );
};
