import "./index.css";
import React,{useState} from 'react'
import logo from "../../images/logo.svg"
import {Link} from "react-router-dom"
import { FaBars,FaCaretDown } from "react-icons/fa";

const NavBar = ({user}) => {
    const [isOpenMenu,setToggleMenuState] = useState(false);
    const [isOpenProfileBox,setToggleProfileBoxState] = useState(false);
    const handleToggleMenuState = ()=>{
        setToggleMenuState(!isOpenMenu);
    }
    const handleToggleProfileBoxState = ()=>{
        setToggleProfileBoxState(!isOpenProfileBox);
    }
    const haveUser = 
        <div className="profile">
            <span className="name">Hưng Tôn</span>
            <FaCaretDown className="icon-down-profile" onClick={handleToggleProfileBoxState}/>
            {
                isOpenProfileBox ?
                <div className="profile-box">
                    <ul>
                        <li>Your profile</li>
                        <li>Log out !</li>
                    </ul>
                </div>
                : null
            }
            <div className="wrapper-img">
                <img src="https://scontent-hkg4-2.xx.fbcdn.net/v/t1.0-9/131983236_1308148409535272_7962750417234204933_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=9UmRmNiYFNgAX8YH7eW&_nc_ht=scontent-hkg4-2.xx&oh=461ffbebe576d7daa768628f36ff5fc6&oe=6072C296"></img>
            </div>
        </div>
    const notUser = 
        <div className="profile">
            <button>Sign In</button>
            <button>Sign Up</button>
        </div>
    return (
        <div className="navbar">
            {
                (user) ? haveUser: notUser
            }
            <div className="nav-header">
                <Link to="/" className="nav-logo">
                    <img src={logo} alt="Beach - Resort"/>
                </Link>
                <ul className={isOpenMenu?"nav-content show":"nav-content"}>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>
                    <li>
                        <Link to = "/rooms">Rooms</Link>
                    </li>
                    <li className="link-profile">
                        <Link to = "/rooms">Profile</Link>
                    </li>
                </ul>
            </div>
            <button className="nav-btn" onClick={handleToggleMenuState}>
                <FaBars className="nav-icon"/>
            </button>
        </div>
    )
}
export default NavBar
