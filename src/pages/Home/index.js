import React from 'react';
import './home.scss';
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import ImageCard from "../../components/ImageCard";
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="mainHome" id="loopstudiosMain">

                <div className="homeContainer">
                    <p>
                        Immersive experiences that deliver
                    </p>
                </div>

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

                    <Button
                        text={"See all"}
                        type={"button"}
                    />

                    <div className="gallery">

                        <ImageCard
                            className={"imageDeepEarth"}
                            text={"Deep earth"} />

                        <ImageCard
                            className={"imageNightArcade"}
                            text={"Night arcade"} />

                        <ImageCard
                            className={"imageSoccerTeam"}
                            text={"Soccer team VR"} />

                        <ImageCard
                            className={"imageGrid"}
                            text={"The grid"} />
                    </div>
                    <div className="gallery">
                        <ImageCard
                            className={"imageFromAbove"}
                            text={"From up above VR"} />

                        <ImageCard
                            className={"imagePocketBorealis"}
                            text={"Pocket borealis"} />

                        <ImageCard
                            className={"imageCuriosity"}
                            text={"The curiosity"} />

                        <ImageCard
                            className={"imageFisheye"}
                            text={"Make it fisheye"} />
                    </div>
                </section>

            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Home;