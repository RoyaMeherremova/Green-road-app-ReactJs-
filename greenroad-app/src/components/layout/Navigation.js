import React from 'react'
import img from '../../assets/images/layout/logo.jpg'
import '../../assets/scss/layout/_navigation.scss';
import { useState } from 'react';
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
// } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
function Navigation() {
    // const [collapsed, setCollapsed] = useState(true);

    // const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <>
            <section id='nav-area'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3 mt-2 d-flex'>
                            <div className='header__left'>
                                <div>
                                    <img className='logo' src={img} />

                                </div>
                                <div className='contact-adress'>
                                    <div className='gap-2'>
                                        <FontAwesomeIcon icon={faPhone} size="1x" style={{ color: "#20a439" }}></FontAwesomeIcon>
                                        <p>+994(51)-465-63-63</p>

                                    </div>
                                    <div className='gap-2'>
                                        <FontAwesomeIcon icon={faEnvelope} size="1x" style={{ color: "#20a439" }}></FontAwesomeIcon>
                                        <p>efsunmeherremov@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-7 mt-2'>
                            <div className='navbar-collapse'>
                                <ul className='navigate'>
                                    <li><a>Home</a></li>
                                    <li><a>Tour</a></li>
                                    <li><a>Packets</a></li>
                                    <li><a>Hotels</a></li>
                                    <li><a>Cars</a></li>
                                    <li><a>About</a></li>
                                    <li><a>Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-2 mt-2'>
                            <div className='header__right'>
                                <a className='register'>Sign up</a>
                                <a className='login'>Log in</a>
                            </div>
                        </div>
                    </div>
                    {/* <Navbar color="faded" light>
                        <NavbarBrand href="/" className="me-auto">
                            reactstrap
                        </NavbarBrand>
                        <NavbarToggler onClick={toggleNavbar} className="me-2" />
                        <Collapse isOpen={!collapsed} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">
                                        GitHub
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar> */}
                </div>
            </section>
        </>
    )
}

export default Navigation
