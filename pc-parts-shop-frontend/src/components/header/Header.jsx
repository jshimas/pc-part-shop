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
  ListItemIcon,
  Divider,
  Button,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Logout from "@mui/icons-material/Logout";
import Login from "@mui/icons-material/Login";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";

const parts = [
  {
    name: "CPUs",
    link: "parts/cpu",
  },
  {
    name: "Motherboards",
    link: "parts/motherboard",
  },
  {
    name: "Memory",
    link: "parts/memory",
  },
  {
    name: "Storage",
    link: "parts/storage",
  },
  {
    name: "Video cards",
    link: "parts/video-card",
  },
];

function Header() {
  const navigate = useNavigate();
  const userRole = useSelector(selectRole);

  const [anchorElProfileMenu, setAnchorElProfileMenu] = React.useState(null);
  const [anchorElPartsMenu, setAnchorElPartsMenu] = React.useState(null);

  const isProfileMenuOpen = Boolean(anchorElProfileMenu);
  const isPartsMenuOpen = Boolean(anchorElPartsMenu);

  const handlePartsMenuClick = (event) => {
    setAnchorElPartsMenu(event.currentTarget);
  };
  const handlePartsMenuClose = () => {
    setAnchorElPartsMenu(null);
  };

  const handleProfileMenu = (event) => {
    setAnchorElProfileMenu(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorElProfileMenu(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box
            onClick={() => navigate("/")}
            sx={{
              display: { md: "flex" },
              alignItems: "center",
              mr: 8,
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <DeveloperBoardIcon sx={{ mr: 1, fontSize: 40 }} />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                align: "justify",
                fontWeight: 700,
                letterSpacing: ".2rem",
                display: { xs: "none", sm: "block" },
              }}
            >
              PC PARTS SHOP
            </Typography>
          </Box>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 3 }}
          >
            <div>
              <Button
                id="parts-button"
                endIcon={
                  isPartsMenuOpen ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )
                }
                sx={{ my: 1, color: "white" }}
                aria-controls={isPartsMenuOpen ? "parts-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={isPartsMenuOpen ? "true" : undefined}
                onClick={handlePartsMenuClick}
              >
                Parts
              </Button>
              <Menu
                id="parts-menu"
                anchorEl={anchorElPartsMenu}
                open={isPartsMenuOpen}
                onClose={handlePartsMenuClose}
                MenuListProps={{
                  "aria-labelledby": "parts-button",
                }}
              >
                {parts.map((part) => (
                  <ListItemButton
                    onClick={
                      handlePartsMenuClose &&
                      function () {
                        navigate(`/${part.link}`);
                      }
                    }
                  >
                    {part.name}
                  </ListItemButton>
                ))}
              </Menu>
            </div>

            <Button
              onClick={() => navigate(`/builds`)}
              sx={{ my: 1, color: "white", display: "block" }}
            >
              completed builds
            </Button>
            {userRole !== roles.GUEST && (
              <Button
                onClick={() => navigate(`/builds/new`)}
                sx={{ my: 1, color: "white", display: "block" }}
              >
                pc builder
              </Button>
            )}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {userRole !== roles.GUEST && (
              <IconButton
                size="large"
                color="inherit"
                onClick={() => navigate("/cart")}
              >
                <Badge badgeContent={2} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            )}
            <div>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls="acc-menu-header"
                aria-haspopup="true"
                onClick={handleProfileMenu}
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                id="acc-menu-header"
                anchorEl={anchorElProfileMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={isProfileMenuOpen}
                onClose={handleProfileClose}
              >
                {userRole === roles.GUEST ? (
                  <ListItemButton onClick={() => navigate("/login")}>
                    <ListItemIcon sx={{ minWidth: "36px" }}>
                      <Login fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Login" />
                  </ListItemButton>
                ) : (
                  <>
                    <ListItemButton onClick={() => navigate("/profile")}>
                      <ListItemIcon>
                        <AccountCircleIcon sx={{ fontSize: 32 }} />
                      </ListItemIcon>
                      <ListItemText primary="Profile" />
                    </ListItemButton>
                    {userRole === roles.ADMIN && (
                      <ListItemButton onClick={() => navigate("/accounts")}>
                        <ListItemIcon>
                          <ManageAccountsIcon sx={{ fontSize: 32 }} />
                        </ListItemIcon>
                        <ListItemText primary="Manage accounts" />
                      </ListItemButton>
                    )}
                    <Divider />
                    <ListItemButton onClick={() => navigate("/login")}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Logout" />
                    </ListItemButton>
                  </>
                )}
              </Menu>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
