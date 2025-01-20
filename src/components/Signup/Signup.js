import React from "react";

import "./Signup.css";

function Signup() {

    return (
        <>


            <main className="main-sign">

                <div className="con1">
                    <div className="con2">
                        <h1><span className="custom-underline">Create Your Account</span></h1>

                        <div className="divide1">
                            <label class="labeltext">Name</label>
                            <input type="text" placeholder="Enter your name" value=""></input>
                        </div>

                        <div className="divide2">
                            <label class="labeltext">Mobile Number</label>
                            <input type="text" placeholder="Enter your phone Number" value=""></input>
                        </div>

                        <div className="divide3">
                            <label class="labeltext">Email </label>
                            <input type="text" placeholder="Enter Email id" value=""></input>
                        </div>
                        <div className="divide4">
                            <label class="labeltext">Password</label>
                            <input type="Password" placeholder="Enter your password" value=""></input>
                        </div>


                        <button>Create Account</button>



                    </div>
                </div>


            </main>

        </>

    )
}

export default Signup