import React from 'react';
import "../../App.css";
import Content from "../content"
import { useNavigate } from 'react-router-dom';


function Home() {

    const navigate = useNavigate();

    const inputchange = (event) => {
      

        if (event.target.value === 'booking') {
            navigate('/booking');
        } else {
            navigate('/tournament');
        }
    };

    return (
        <div>

            <main>
                <section id="home">
                    <h1 className='head'> STEP ONTO THE FIELD OF YOUR DREAMS!</h1>
                </section>
                <section id="para">
                    <p className='parag'>Effortlessly organize and join cricket matches and tournaments—anytime, anywhere.</p>
                </section>
                <div className="DD">
                    <select
                        id="Dropdown"
                        className="Dropdownlist"
                        onChange={inputchange}>
                        <option value=""> Select an option</option>
                        <option value="booking">Booking</option>
                        <option value="tournaments">Tournaments</option>
                    </select>
                </div>
                <Content />
            </main>
        </div>
    )
}

export default Home