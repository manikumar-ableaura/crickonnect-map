import React, { useState } from "react";
import Button from "../Button/Button";
import "./Login.css";

function Login() {
    const [formdata, setformdata] = useState({
        emailOrMobile: "",
        password: "",
    });

    return (
        <main className="main-container">

            <div className="div1">
                <div className="div2">
                    <h1>Login or Create Your Account</h1>

                    <div className="divi3">
                        <label className="labeltext">Email / Mobile Number</label>
                        <input
                            type="text"
                            placeholder="Email or Phone"
                            value={formdata.emailOrMobile}
                            onChange={(event) => {
                                setformdata({ ...formdata, emailOrMobile: event.target.value });
                                console.log(event.target.value); 
                            }}
                        />
                    </div>

                    <div className="divi4">
                        <label className="labeltext">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={formdata.password}
                            onChange={(event) => {
                                setformdata({ ...formdata, password: event.target.value });
                                console.log(event.target.value); 
                            }}
                        />
                    </div>

                    <a href="#">Forgot Password</a>

                   <Button btnname= "Login"/>

                    <p>Don't have an account? <a href="/signup/">Sign-up</a></p>

                </div>
            </div>

        </main>
    );
}

export default Login;
