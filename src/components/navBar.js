import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {Navbar, Nav} from "react-bootstrap";

class NavBar extends Component{
    render(){
        return(

<Navbar bg="light" expand="lg" className="navWrapper">
        <Navbar.Brand href="/" className="brandLogo">CozyCollections</Navbar.Brand>
        <Nav.Item > <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link></Nav.Item>

        <Navbar.Toggle aria-controls="basic-navbar-nav"/>

        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
                <Nav.Item className="mx-4" ><Link to="/">Home</Link> </Nav.Item>
                <Nav.Item className="mx-4" ><Link to="/products">Shop</Link> </Nav.Item>
                <Nav.Item className="mx-4" > 
                   <Link to="./cart">My Cart</Link> </Nav.Item>

            </Nav>
        </Navbar.Collapse>

    </Navbar>
        )
    }
    /* <nav className="navWrapper sticky-top">
    <div className="container">
    <Link to="/" className="brandLogo">Shopping</Link>
        <ul className="float-right">
            <li className="px-5"> <Link to ="/" >Shop</Link> </li>
            <li className="px-5"> <Link to ="/cart" >My cart </Link></li>
            <li><a href="https://www.freepik.com/photos/vintage">Vintage photo created by freepik - www.freepik.com</a></li>
            <li className="px-5"> <Link to ="/cart" > <FontAwesomeIcon icon={faShoppingCart} /> </Link></li>
        </ul>
    </div>
</nav> */
}


export default NavBar;

