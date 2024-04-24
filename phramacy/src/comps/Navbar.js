import { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import {Link} from
"react-router-dom"


class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Pharmacy</h1>

                <ul className="nav-menu">
                    {MenuItems.map((item, index) =>{
                       return(
                        <li>
                        <a href="/">
                        <i className="fa-light fa-house"></i>Home</a>
                    </li>

                       ); 
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;