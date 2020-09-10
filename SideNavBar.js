import React from "react";
import "./SideBarNav.module.css";

class SideNavBar extends React.Component {
  render() {
    return (
      <div class="sidebar">
        <a class="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    );
  }
}

export default SideNavBar;
