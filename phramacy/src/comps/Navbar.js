import { Component } from "react";
import "./Navbar.css";
import {Link} from
"react"


class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Pharmacy</h1>

                <ul className="nav-menu">
                    <li>
                        <a>
                        <i class="fa-light fa-house"></i>Home</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;