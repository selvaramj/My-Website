import React from 'react';
import logo from '../../containers/images/website_logo.png';
import './index.css';

const Header = () => {
  return (
    <nav className="navigation-wrapper">
      <div className="nav-brand">
        <img src={logo} alt="Website brand logo" />
      </div>
      <i class="fa fa-bars small-view-bar-icon"></i>
      <div className="nav-links hide">
        <ul>
          <li>
            <a>Work</a>
          </li>
          <li>
            <a>About me</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
