import React from "react";

function Login() {
    return (
        <div className="login">
             <div className="container">
        <img src="filename.jpg" alt="" />
        <h2>Hello</h2>
        <p>Rubik's User</p>
        <input type="text" placeholder = "email" className="id" /><br></br>
        <input type="password" placeholder="password" className="id" /><br>
        </br>
        <button onClick="">SignIn</button>
        <h4>Don't have an Account?</h4>
        <button>Register</button>
        <button className="guest">Guest Mode</button>
      </div>
        </div>
    );

}

export default Login;