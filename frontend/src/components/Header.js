import React, {useState} from "react";
import {Navbar, Container } from 'react-bootstrap';
import '../css/Header.css'

const Header = (props) => {
    const {title} = props;
    return(
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="/">{title}</Navbar.Brand>
            </Container>
        </Navbar>
    )
};

export default Header;