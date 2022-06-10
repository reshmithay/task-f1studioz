import { Notifications, GridOn, Help } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, styled, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#ffeee6",
});

const Logo = styled("img")({
  height: "34px",
});

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  color: "#000000",
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Link to="/">
          <Logo src="f1studioz.png" alt="website-logo" />
        </Link>
        <Icons>
          <Badge>
            <GridOn />
          </Badge>
          <Badge
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            color="error"
            variant="dot"
          >
            <Notifications />
          </Badge>
          <Badge>
            <Help />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} src="profile-pic.jpeg" />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
