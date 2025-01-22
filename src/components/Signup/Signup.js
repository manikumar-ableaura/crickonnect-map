import React, { useState } from "react";
import './Signup.css';  


function Signup() {
    const [formdata, setformdata] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
    });

    return (
        <main className="main-sign">
            <div className="con1">
                <div className="con2">
                    <h1>
                        <span className="custom-underline">Create Your Account</span>
                    </h1>

                    <div className="divide1">
                        <label className="labeltext">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={formdata.name}
                            onChange={(e) => {
                                setformdata({ ...formdata, name: e.target.value });
                                console.log(e.target.value);
                            }}
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="divide2">
                        <label className="labeltext">Mobile Number</label>
                        <input
                            type="text"
                            id="mobile"
                            value={formdata.mobile}
                            onChange={(e) => {
                                setformdata({ ...formdata, mobile: e.target.value });
                                console.log(e.target.value);
                            }}
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div className="divide3">
                        <label className="labeltext">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={formdata.email}
                            onChange={(e) => {
                                setformdata({ ...formdata, email: e.target.value });
                                console.log(e.target.value);
                            }}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="divide4">
                        <label className="labeltext">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={formdata.password}
                            onChange={(e) => {
                                setformdata({ ...formdata, password: e.target.value });
                                console.log(e.target.value);
                            }}
                            placeholder="Enter your password"
                        />
                    </div>

                    <button type="submit">Create Account</button>
                </div>
            </div>
        </main>
    );
}

export default Signup;
