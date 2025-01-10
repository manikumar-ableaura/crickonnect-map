import React from "react";

import "./MyTeam.css";

function MyTeam() {

    return (
        <>


            <main className="layout-main-container">
                <h1>CREATE YOUR TEAM</h1>
                <div className="con">


                    <div className="div-sec">

                        <div className="div3">
                            <label class="labeltxt">Team name*</label>
                            <input type="text" value=""></input>
                        </div>
                        <div className="div4">
                            <label class="labeltxt">Team logo*</label>
                            <input type="file" value=""></input>
                        </div>
                    </div>
                    <div className="div-sec2">
                        <div className="div5">
                            <label class="labeltxt">Team ground location*</label>
                            <select class="dropdown" name="teamlocation" required="">
                                <option value="placeholder" disabled="">Select a location</option>
                                <option value="Tirupur">Tirupur</option>
                                <option value="Coimbatore">Coimbatore</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Salem">Salem</option>
                                <option value="Dindigul">Dindigul</option></select>
                        </div>
                        <div className="seperatediv">

                            
                                <label className="lab" >Does Your Team Have Own Ground? *</label>
                                <div className="div6">

                                    <label>
                                        <input type="radio" name="hasOwnGround" value="Yes" /> Yes
                                    </label>

                                    <label>
                                        <input type="radio" name="hasOwnGround" value="No" /> No
                                    </label>
                                </div>
                         
                        </div>
                    </div>


                    <button type="submit" className="press">Submit</button>


                </div>


            </main >

        </>

    )
}

export default MyTeam