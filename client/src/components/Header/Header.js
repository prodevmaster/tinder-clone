import React from "react";
import "./Header.css";
import { IconButton } from "@material-ui/core";
import PersonIcon from "@mui/icons-material/Person";
import tinderLogo from "../../images/tinder-logo.png";
import ForumIcon from "@mui/icons-material/Forum";
const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img src={tinderLogo} alt="" className="header__logo" />

      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
};

export default Header;
