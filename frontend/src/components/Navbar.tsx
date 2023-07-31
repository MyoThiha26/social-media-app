import { Facebook, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  backgroundColor: "#1D5D9B",
  padding: "7px 0px",
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: "7px 13px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const IconsContainer = styled(Box)(({ theme }) => ({
  display: "none",
  gap: 20,
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 10,
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Facebook
        </Typography>
        <Facebook sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase fullWidth placeholder="Search..."></InputBase>
        </Search>
        <IconsContainer>
          <Box onClick={handleClick} sx={{ ":hover": { cursor: "pointer" } }}>
            <IconButton>
              <Badge badgeContent={4} color="error">
                <Mail sx={{ color: "white" }} />
              </Badge>
            </IconButton>
          </Box>
          <Box onClick={handleClick}>
            <Badge badgeContent={2} color="error">
              <Notifications />
            </Badge>
          </Box>
          <Avatar
            onClick={handleClick}
            sx={{ width: 30, height: 30 }}
            src="https://shorturl.at/xIQT9"
          />
        </IconsContainer>
        <UserContainer onClick={handleClick}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://shorturl.at/xIQT9"
          />
          <Typography>Calir</Typography>
        </UserContainer>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
