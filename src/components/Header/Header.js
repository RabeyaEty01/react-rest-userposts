import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="menu">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact us</a>
            </nav>
            <p className="sub-title">Visit Us</p>
        </div>
    );
};

export default Header;