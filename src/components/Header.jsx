import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeItem, setActiveItem] = useState();

  return (
    <Menu inverted data-cy="header">
      <Menu.Item
        id="home"
        name="home"
        as={Link}
        to={{ pathname: "/" }}
        data-cy="home"
        active={activeItem === "home"}
        onClick={setActiveItem}
      >
        Home
      </Menu.Item>
      <Menu.Item
        id="menu"
        name="menu"
        as={Link}
        to={{ pathname: "/Menu" }}
        active={activeItem === "menu"}
        onClick={setActiveItem}
        data-cy="menu"
      >
        Menu
      </Menu.Item>
      <Menu.Item
        id="about"
        name="about"
        as={Link}
        to={{ pathname: "/About" }}
        active={activeItem === "about"}
        onClick={setActiveItem}
        data-cy="about"
      >
        About
      </Menu.Item>
      <Menu.Item
        position="right"
        id="signup"
        name="signup"
        as={Link}
        to={{ pathname: "/signup" }}
        data-cy="btn-signup"
        active={activeItem === "signup"}
        onClick={setActiveItem}
      >
        Sign up
      </Menu.Item>
      <Menu.Item
        id="login"
        name="login"
        as={Link}
        to={{ pathname: "/login" }}
        data-cy="login-btn"
        active={activeItem === "login"}
        onClick={setActiveItem}
      >
        Login
      </Menu.Item>
    </Menu>
  );
};

export default Header;
