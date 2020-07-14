import { Link } from "gatsby";
import NavLink from './nav-link.js';
import PropTypes from "prop-types";
import React from "react";

import './Styling/header.css';

const Header = () => (
  <header className="navbar">
      <NavLink name={'Home'} link={'#home'}></NavLink> 
      <NavLink name={'About'} link={'#about'}></NavLink> 
      <NavLink name={'Projects'} link={'#projects'}></NavLink> 
      <NavLink name={'Contact'} link={'#contact'}></NavLink> 
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
