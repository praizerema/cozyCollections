import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {Navbar, Nav} from "react-bootstrap";
import { connect } from 'react-redux';
 
class NavBar extends Component{
    render(){
        return(

<Navbar bg="light" expand="lg" className="navWrapper fixed-top">
        <Navbar.Brand href="/" className="brandLogo">CozyCollections</Navbar.Brand>
        <Nav.Item > <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /><span className="font-16 cl-f400e8" style={{ color: "#f400e8", left: "-3px", position:"relative", backgroundColor:"#f3f3f3", borderRadius:"50%", fontSize: "12px", padding: "2px"}}>{this.props.items.length === 0? "":this.props.items.length}</span></Link></Nav.Item>

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

const mapStateToProps = (state)=>{
console.log("nav:" + state.addedItems.length)
    return{
        items: state.addedItems
    }
}
export default connect(mapStateToProps)(NavBar);

