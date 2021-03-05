import "./index.css";
import React,{useState} from 'react'
import logo from "../../images/logo.svg"
import {Link} from "react-router-dom"
import { FaBars } from "react-icons/fa";

const NavBar = () => {
    const [isOpen,setToggleState] = useState(false);
    const handleToggleState = ()=>{
        setToggleState(!isOpen);
    }
    return (
        <div className="navbar">
            <div className="nav-header">
                <Link to="/" className="nav-logo">
                    <img src={logo} alt="Beach - Resort"/>
                </Link>
                <ul className={isOpen?"nav-content show":"nav-content"}>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>
                    <li>
                        <Link to = "/rooms">Rooms</Link>
                    </li>
                </ul>
            </div>
            <button className="nav-btn" onClick={handleToggleState}>
                <FaBars className="nav-icon"/>
            </button>
        </div>
    )
}
export default NavBar
