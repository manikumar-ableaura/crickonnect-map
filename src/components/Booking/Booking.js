import React from "react";
import "./Booking.css";
import place1 from "../image/grounde.jpg";
import place2 from "../image/a.jpg";
import place3 from "../image/g1.jpg";
import place4 from "../image/g2.jpg";
import place5 from "../image/g3.jpg";
import place6 from "../image/g4.jpg";






function Booking() {


    const groundDetails = [
        {
            groundImg: place1,
            groundName: "Chepauk",
            groundFee: 1000,
            location: "href=https://www.google.com/maps",
        },

        {
            groundImg: place2,
            groundName: "mahatma",
            groundFee: 1000,
            location: "href=https://www.google.com/maps",
        },

        {
            groundImg: place3,
            groundName: "nehru",
            groundFee: 1000,
            location: "href=https://www.google.com/maps",
        },

        {
            groundImg: place4,
            groundName: "Irunga",
            groundFee: 1000,
            location: "href=https://www.google.com/maps",
        },

        {
            groundImg: place5,
            groundName: "Bhai",
            groundFee: 1000,
            location: "href=https://www.google.com/maps",
        },

        {
            groundImg: place6,
            groundName: "kilpauk",
            groundFee: 1000,
            location: "href=https://www.google.com/maps",
        }
    ]


    return (
        <div className="main-div">
            <div className="booking-conta">
                {groundDetails.map((item, index) => (
                    <div className="common">
                        <div className="ground-card"
                            key={index}>
                            <img src={item.groundImg} alt={item.groundName} className="ground-image" />
                            <div className="ground-info">
                                <h3>{item.groundName}</h3>
                                <p>Fee: ₹{item.groundFee}</p>
                                <a href={item.location} target="_blank" rel="noopener noreferrer">Get directions</a>
                            </div>
                        </div>
                        <button className="book-now-button">BOOK NOW!</button>
                    </div>
                ))}

            </div>

        </div>
    );
}


export default Booking