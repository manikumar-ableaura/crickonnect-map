import React from "react";

import "./Login.css";

function Login() {

    return (
        <>


            <main className="main-container">

                <div className="div1">
                    <div className="div2">
                    <h1><span className="custom-underline">Login or Create Your Account</span></h1>

                        <div className="divi3">
                            <label class="labeltext">Email / Mobile Number</label>
                            <input type="text" placeholder="Email or Phone" value=""></input>
                        </div>
                        <div className="divi4">
                            <label class="labeltext">Password</label>
                            <input type="Password" placeholder="Password" value=""></input>
                        </div>
                        <a>Forgot Password</a>

                        <button>Login</button>

                        <p>Don't have an account? <a href="/signup/">Sign-up</a></p>

                    </div>
                </div>


            </main>

        </>

    )
}

export default Login