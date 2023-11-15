import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Container } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { DarkMode, LightMode } from "@mui/icons-material";
import { ColorModeContext } from "../../../Context/ColorModeContext";
import { CarContext } from "../../../Context/CarContext";

const pages = ["Productos", "Carrito"];

export const Navbar = ({ children }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const carContext = useContext(CarContext);
  const [anchorElNav, setAnchorElNav] = useState();

  const handleOpenNavMenu = (e) => {
    e.preventDefault();
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <CheckroomIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Bionica
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to={`/productos`}
                    >
                      productos
                    </Link>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            <CheckroomIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Bionica
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/productos`}
                >
                  productos
                </Link>
              </Button>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/productos`}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Badge
                    badgeContent={carContext.carItems.length}
                    color="secondary"
                  >
                    <ShoppingCartIcon color="white" />
                  </Badge>
                </Button>
              </Link>
            </Box>

            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </div>
  );
};
