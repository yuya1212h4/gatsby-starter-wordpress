import React from 'react';
import '../layout/style.scss';
import { Link } from 'gatsby';

const Header = () => (
  <div>
    <h3>Header pageiiii</h3>
    <div className="Header">Header_body</div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/scroll">Scroll</Link></li>
    </ul>
  </div>
)

export default Header;