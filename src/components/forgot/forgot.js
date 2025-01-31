import React, { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";  
import "./forgot.css";

function Forgot() {
    const [formdata, setformdata] = useState({
        email: "",
        password: "",
    });

    return (
        <main className="main-container">
            <div className="div1">
                <div className="div2">
                    <h1>Create Your Account</h1>

                    <div className="divi3">
                        <label className="labeltext">Email</label>
                        <input
                            type="text"
                            placeholder="Email or Phone"
                            value={formdata.email}
                            onChange={(event) => {
                                setformdata({ ...formdata, email: event.target.value }); // Updating the email key
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
                                setformdata({ ...formdata, password: event.target.value }); // Updating the password key
                                console.log(event.target.value); 
                            }}
                        />
                    </div>

                    <Link to="/forgot-password">Forgot Password</Link> {/* Updated to Link component */}

                    <Button btnname="Login" />

                    <p>Don't have an account? <Link to="/signup">Sign-up</Link></p>
                </div>
            </div>
        </main>
    );
}

export default Forgot;
