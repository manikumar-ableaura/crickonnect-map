import React, { useState } from "react";

import "./MyTeam.css";

function MyTeam() {
    const [teamName, setTeamName] = useState(""); 
    const [teamLogo, setTeamLogo] = useState("");
    const [teamLocation, setTeamLocation] = useState(""); 
    const [hasOwnGround, setHasOwnGround] = useState(""); 

    return (
        <>
            <main className="layout-main-container">
                <h1>CREATE YOUR TEAM</h1>
                <div className="con">
                    <div className="div-sec">
                        <div className="div3">
                            <label className="labeltxt">Team name*</label>
                            <input 
                                type="text" 
                                value={teamName} 
                                onChange={(e) => setTeamName(e.target.value)} 
                                placeholder="Enter team name"
                            />
                        </div>
                        <div className="div4">
                            <label className="labeltxt">Team logo*</label>
                            <input 
                                type="file" 
                                value={teamLogo} 
                                onChange={(e) => setTeamLogo(e.target.value)} 
                            />
                        </div>
                    </div>
                    <div className="div-sec2">
                        <div className="div5">
                            <label className="labeltxt">Team ground location*</label>
                            <select 
                                className="dropdown" 
                                name="teamlocation" 
                                value={teamLocation} 
                                onChange={(e) => setTeamLocation(e.target.value)} 
                                required
                            >
                                <option value="placeholder" disabled>Select a location</option>
                                <option value="Tirupur">Tirupur</option>
                                <option value="Coimbatore">Coimbatore</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Salem">Salem</option>
                                <option value="Dindigul">Dindigul</option>
                            </select>
                        </div>
                        <div className="seperatediv">
                            <label className="lab">Does Your Team Have Own Ground? *</label>
                            <div className="div6">
                                <label>
                                    <input 
                                        type="radio" 
                                        name="hasOwnGround" 
                                        value="Yes" 
                                        checked={hasOwnGround === "Yes"} 
                                        onChange={(e) => setHasOwnGround(e.target.value)} 
                                    /> Yes
                                </label>
                                <label>
                                    <input 
                                        type="radio" 
                                        name="hasOwnGround" 
                                        value="No" 
                                        checked={hasOwnGround === "No"} 
                                        onChange={(e) => setHasOwnGround(e.target.value)} 
                                    /> No
                                </label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="press">Submit</button>
                </div>
            </main>
        </>
    );
}

export default MyTeam;
