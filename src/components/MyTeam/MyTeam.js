import React, { useState } from "react";
import Button from "../Button/Button";

import "./MyTeam.css";

function MyTeam() {
    const [formData, setFormData] = useState({
        teamName: "",
        teamLogo: "",
        teamLocation: "",
        hasOwnGround: ""
    });

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
                                value={formData.teamName} 
                                onChange={(event) => {
                                    setFormData({
                                        ...formData,
                                        teamName: event.target.value
                                    });
                                    console.log(event.target.value);  
                                }} 
                                placeholder="Enter team name"
                            />
                        </div>
                        <div className="div4">
                            <label className="labeltxt">Team logo*</label>
                            <input 
                                type="file" 
                                value={formData.teamLogo} 
                                onChange={(event) => {
                                    setFormData({
                                        ...formData,
                                        teamLogo: event.target.value
                                    });
                                    console.log(event.target.value);  
                                }} 
                            />
                        </div>
                    </div>
                    <div className="div-sec2">
                        <div className="div5">
                            <label className="labeltxt">Team ground location*</label>
                            <select 
                                className="dropdown" 
                                name="teamlocation" 
                                value={formData.teamLocation} 
                                onChange={(event) => {
                                    setFormData({
                                        ...formData,
                                        teamLocation: event.target.value
                                    });
                                    console.log(event.target.value);  
                                }} 
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
                                        checked={formData.hasOwnGround === "Yes"} 
                                        onChange={(event) => {
                                            setFormData({
                                                ...formData,
                                                hasOwnGround: event.target.value
                                            });
                                            console.log(event.target.value);  
                                        }} 
                                    /> Yes
                                </label>
                                <label>
                                    <input 
                                        type="radio" 
                                        name="hasOwnGround" 
                                        value="No" 
                                        checked={formData.hasOwnGround === "No"} 
                                        onChange={(event) => {
                                            setFormData({
                                                ...formData,
                                                hasOwnGround: event.target.value
                                            });
                                            console.log(event.target.value);  
                                        }} 
                                    /> No
                                </label>
                            </div>
                        </div>
                    </div>
                    <Button btnname= "Submit"/>
                </div>
            </main>
        </>
    );
}

export default MyTeam;
