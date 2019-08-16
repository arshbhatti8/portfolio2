import React, {useState} from 'react';
import {
    Navbar,
    Collapse,
    Nav,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
} from "reactstrap";

const NavbarTop = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    };

    return (
            <Navbar color="light" expand="md" fixed="top" light>
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2"/>
                <Collapse isOpen={collapsed} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Intro</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">What I Do</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
    );
};

export default NavbarTop;