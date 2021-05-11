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
                            to="/about"
                            title="Go to about"
                            className="navItems"
                        >About</Link>
                    </NavItem>

                </Nav>

            </Navbar>
        </div>
    );
}

export default NavBar;