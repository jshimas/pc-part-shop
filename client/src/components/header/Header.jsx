import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  ListItemIcon,
  Avatar,
  Divider,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";

const pages = ["PC parts", "Build PC"];

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isOpen = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
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
                <MenuItem onClick={handleClose}>
                  <Avatar sx={{ width: 32, height: 32, ml: -0.5, mr: 1 }} /> My
                  account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
