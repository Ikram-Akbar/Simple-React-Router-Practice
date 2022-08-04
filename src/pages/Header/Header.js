import React from 'react';
import {Link} from "react-router-dom"

const Header = () => {
    return (
      <div>
        <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/friends">Friends</Link>
                <Link to="/portfolio">Portfolio</Link>
        </nav>
      </div>
    );
};

export default Header;