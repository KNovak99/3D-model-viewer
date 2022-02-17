import React, { Component, useState} from "react";
import { NavbarItems } from "./NavbarItems";
import './Navbar.css';

// Navbar class used to display links to other pages
class Navbar extends Component{
    state = {clicked: false}

    //flips the boolean value for the state clicked variable
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    //render and return the html involved in creating the navbar
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">3D Model Viewer<i></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {//Loop through the NavbarItems
                    NavbarItems.map((item, index) => {
                        //return each items data
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.PageName}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}


export default Navbar