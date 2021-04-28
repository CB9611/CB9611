
/* Function imports */
import React, { useState, useEffect } from 'react';

/* Navbar imports */
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText
} from 'reactstrap';

/* Style imports */
import '../../styles/navbar.css';

const navbar = () => {
    return (
        <div className="navbar">
            <div className="content">
                <Navbar className="links">
                    
                    <NavbarBrand
                        className="navbarBrand"
                        href="/home"
                    >CB9611</NavbarBrand>

                    <NavItem className="buttons">
                        <Link className="pages"
                            to="/home"
                        >Home</Link>
                    </NavItem>

                    <NavItem className="buttons">
                        <Link className="pages"
                            to="/about"
                        >About</Link>
                    </NavItem>

                    <NavItem className="buttons">
                        <Link className="pages"
                            to="/CB9611"
                        >CB9611</Link>
                    </NavItem>

                </Navbar>
            </div>
        </div>
    );
}

export default navbar;