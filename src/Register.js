import React from "react";
import "./Register.css";


function Register() {
    return (
        <div className="register">
            <div className="container">
                <div className="heading">
                    <h2>Create a New Account</h2>
                </div>
                <div className="body">
                    <input type="text" className="firstName" />
                    <input type="text" className="lastName" />
                    <button className="btn">Register</button>
            </div>
        </div>
    );
}

export default Register;
