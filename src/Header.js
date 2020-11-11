import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https:/www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_light.svg?cache=72a5d9c"
          alt="YouTube"
        />
      </div>

      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <form>
          <Link to={`/search/${inputSearch}`}>
            <SearchIcon type="submit" className="header__inputButton" />
          </Link>
        </form>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          src="https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/82660695_165746604714449_4953850631082213376_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=Pbw5rpQMEOIAX9e7CFl&oh=8ebd77b30cdca163495dee5ee03d1d50&oe=5FCC36BC"
          alt="M"
        />
      </div>
    </div>
  );
}

export default Header;
