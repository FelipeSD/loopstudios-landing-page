import React from 'react';
import './home.scss';
import Navbar from "../../components/Navbar";

const ImageCard = () => {
    return (
        <div>

        </div>
    )
}

const Home = () => {
    return (
        <main className="mainHome">
            <Navbar />

            <section className="homeContainer">
                <p>
                    Immersive experiences that deliver
                </p>
            </section>

            <section className="aboutUsContainer">
                <div>
                    <div className="imageInteractive" />
                </div>
                <div>
                    <h3>
                        The leader in interactive VR
                    </h3>
                    <p>
                        Founded in 2011, Loopstudios has been producing world-class virtual reality
                        projects for some of the best companies around the globe. Our award-winning
                        creations have transformed businesses through digital experiences that bind
                        to their brand.
                    </p>
                </div>
            </section>

            <section className="ourCreationsContainer">
                <h3>Our creations</h3>
                <button type="button">See all</button>
                <div>
                    <ImageCard text={"Deep earth"} />
                    <ImageCard text={"Night arcade"} />
                    <ImageCard text={"Soccer team VR"} />
                    <ImageCard text={"The grid"} />
                    <ImageCard text={"From up above VR"} />
                    <ImageCard text={"Pocket borealis"} />
                    <ImageCard text={"The curiosity"} />
                    <ImageCard text={"Make it fisheye"} />
                </div>
            </section>

            <footer>
                About
                Careers
                Events
                Products
                Support

                <span>© 2021 Loopstudios. All rights reserved.</span>

                <div className="attribution">
                    Challenge by <a rel={"noreferrer"} href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                    Coded by <a rel={"noreferrer"} target="_blank" href="https://github.com/FelipeSD">Felipe SD</a>.
                </div>
            </footer>
        </main>
    )
}

export default Home;