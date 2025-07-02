
import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function Header(){

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>
            <Navbar  expand="md" fixed="top">
                <NavbarBrand href="/">
                    <img
                            alt="Profile Picture"
                            src={`${process.env.PUBLIC_URL}/MS_logo.png`}
                            className='img-fluid rounded mx-auto d-block'
                            style={{
                                borderRadius: "50%",
                            }}
                        />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink to="/" tag={RouterNavLink}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/about" tag={RouterNavLink}>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/skill" tag={RouterNavLink}>Skills</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Experience
                        </DropdownToggle>
                        <DropdownMenu end>
                            <DropdownItem>
                                <NavLink to="/work" tag={RouterNavLink}>Work Exp</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink to="/projects" tag={RouterNavLink}>Projects</NavLink>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <NavLink to="/certs" tag={RouterNavLink}>Certificates</NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                    <NavLink to="/education" tag={RouterNavLink}>Education</NavLink>
                    </NavItem>
                </Nav>

                <NavbarText>
                    <NavLink to="/connect" tag={RouterNavLink}>Let's Connect</NavLink>
                </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header;