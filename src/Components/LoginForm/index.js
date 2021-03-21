import React from 'react'
import "./index.css"
import {FaGoogle,FaFacebook,FaTwitter} from "react-icons/fa";
import {CgClose} from "react-icons/cg";

const LoginForm = ({type="signup"}) => {
    return (
        <div className="login_form_wrapper">
            <div className="close_form" title="Close"><CgClose /></div>
            <div className="login_form">

                <div className="title">{(type==="signup")?"SIGN UP" : "LOG IN"}</div>
                <div className="separator"></div>
                {
                    (type==="signup")?
                    <>
                        <label for="email">Email:</label>
                        <input type="text" id="email" placeholder="email"/>
                    </> :null
                }

                <label for="user">Username:</label>
                <input type="text" id="user" placeholder="username"/>

                <label for="password">Password:</label>
                <input type="password" id="password" placeholder="password"/>

                {
                    (type==="signup")?
                    <>
                        <label for="re-password">Re-password:</label>
                        <input type="password" id="re-password" placeholder="re-password"/>
                    </> :null
                }

                <button>{(type==="signup")?"SIGN UP" : "LOG IN"}</button>
                <a href="#" >Quên mật khẩu </a>

                <div className="social_login">
                    <div>
                        <FaGoogle />
                    </div>
                    <div>
                        <FaFacebook />
                    </div>
                    <div>
                        <FaTwitter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
