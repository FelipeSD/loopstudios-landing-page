import React from 'react';
import './home.scss';
import Navbar from "../../components/Navbar";

const Home = () => {
    return (
        <main className="mainHome">
            <Navbar />
            <section className="homeContainer">
                <p>
                    Immersive experiences that deliver
                </p>
            </section>
            <section>
                <div>
                    <h3>
                        The leader in interactive VR
                    </h3>
                </div>
                <div>
                    <p>
                        Founded in 2011, Loopstudios has been producing world-class virtual reality
                        projects for some of the best companies around the globe. Our award-winning
                        creations have transformed businesses through digital experiences that bind
                        to their brand.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Home;