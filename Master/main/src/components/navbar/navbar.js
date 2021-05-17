/* Function imports */
import React, { useState } from 'react';

/* Navbar imports */
import { Link } from 'react-router-dom';
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavItem
} from 'reactstrap';

/* Style imports */
import '../../styles/navbar.css';

const NavBar = (props) => {
    return (
        <div>
            <Navbar className="navObject">

                <NavbarBrand>
                    <Link
                        to="/"
                        title="CB9611 - Go to home"
                        className="navBrand"
                    >CB9611</Link>
                </NavbarBrand>

                <Nav className="navObjects">

                    <NavItem>
                        <Link
                            to="/"
                            title="Go to home"
                            className="navItems"
                        >Home</Link>
                    </NavItem>

                    <NavItem>
                        <Link
                            to="myLife"
                            title="View some pictures of things I like"
                            className="navItems"
                        >temp</Link>
                    </NavItem>

                    <NavItem>
                        <Link
                            to="/about"
                            title="Go to about"
                            className="navItems"
                        >About</Link>
                    </NavItem>

                    <NavItem>
                        <a
                            href="https://www.youtube.com/c/Cb9611/videos"
                            target = "_blank"
                            rel = "noopener noreferrer"
                            title="Go to YouTube channel"
                            className="navSocial"
                        >YouTube</a>
                    </NavItem>

                </Nav>

            </Navbar>
        </div>
    );
}

export default NavBar;