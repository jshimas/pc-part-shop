import * as React from "react";
import { useSelector } from "react-redux";
import { selectRole } from "../../app/slices/userSlice";
import { roles } from "../../roles";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Menu,
  ListItem,
  ListItemIcon,
  Avatar,
  Divider,
  Button,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import Login from "@mui/icons-material/Login";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import { Outlet } from "react-router-dom";

const pages = ["PC parts", "Build PC"];

function Header() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const userRole = useSelector(selectRole);

  const isOpen = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <DeveloperBoardIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1, fontSize: 40 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 8,
              align: "justify",
              fontWeight: 700,
              letterSpacing: ".2rem",
              display: { xs: "none", sm: "block" },
            }}
          >
            PC PARTS SHOP
          </Typography>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 3 }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 1, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={0} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <div>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls="acc-menu-header"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                id="acc-menu-header"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={isOpen}
                onClose={handleClose}
              >
                {userRole === roles.GUEST ? (
                  <>
                    <ListItemButton onClick={() => navigate("/login")}>
                      <ListItemIcon sx={{ minWidth: "36px" }}>
                        <Login fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Login" />
                    </ListItemButton>
                  </>
                ) : (
                  <>
                    <ListItem onClick={handleClose}>
                      <Avatar sx={{ width: 32, height: 32, ml: -0.5, mr: 1 }} />{" "}
                      My account
                    </ListItem>
                    <Divider />
                    <ListItem onClick={handleClose}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </ListItem>
                  </>
                )}
              </Menu>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}

export default Header;
