import React from 'react';

import "../../App.css";
import Content from "../content"


function Home() {

    return (
        <div>
           
            <main>
                <section id="home">
                    <h1 className='head'> STEP ONTO THE FIELD OF YOUR DREAMS!</h1>
                </section>
                <section id="para">
                    <p className='parag'>Effortlessly organize and join cricket matches and tournaments—anytime, anywhere.</p>
                </section>
                <Content />
            </main>
        </div>
    )
}

export default Home