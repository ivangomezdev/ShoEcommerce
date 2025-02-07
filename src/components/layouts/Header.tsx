"use client";
import * as React from "react";
import "./header.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreIcon from "@mui/icons-material/MoreVert";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { useAtom } from "jotai";
import { cartAtom } from "@/hooks/UseCart";

export default function Header() {
  const [cart, setCart] = useAtom(cartAtom);

  React.useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, [setCart]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link
        href="/"
        passHref
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <MenuItem>
          <IconButton size="large" aria-label="home" color="inherit">
            <HomeIcon />
          </IconButton>

          <p>Inicio</p>
        </MenuItem>
      </Link>
      <Link
        href="/about"
        passHref
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <MenuItem>
          <IconButton size="large" aria-label="about us" color="inherit">
            <InfoIcon />
          </IconButton>

          <p>Sobre nosotros</p>
        </MenuItem>
      </Link>
      <MenuItem>
        <Link
          href="/products"
          passHref
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
        </Link>
        <p>Productos</p>
      </MenuItem>

      <Link
        href="/cart"
        passHref
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <MenuItem>
          <IconButton size="large" aria-label="show cart items" color="inherit">
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          <p>Carrito</p>
        </MenuItem>
      </Link>
      <Link
        style={{ color: "inherit", textDecoration: "none" }}
        passHref
        href={"/me"}
      >
        <MenuItem>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Perfil</p>
        </MenuItem>
      </Link>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            height: { xs: "64px", md: "80px" },
            minHeight: { xs: "64px", md: "80px" },
            padding: "0 16px", // Added padding
          }}
        >
          <img
            style={{
              width: "150px",

              objectFit: "contain",
            }}
            src="/assets/shoecommerce.png"
            alt="Shoecommerce Logo"
          />

          <Box
            className="header__itemCont"
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "16px",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Link
              href={"/"}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <p className="header__item">Inicio</p>
            </Link>
            <Link
              href={"/about"}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <p className="header__item">Sobre nosotros</p>
            </Link>
            <Link
              href={"/products"}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <p className="header__item">Productos</p>
            </Link>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link
              href="/products"
              passHref
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <IconButton size="large" aria-label="search" color="inherit">
                <SearchIcon />
              </IconButton>
            </Link>
            <Link
              href="/cart"
              passHref
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <IconButton
                size="large"
                aria-label="show cart items"
                color="inherit"
              >
                <Badge badgeContent={cart.length} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
