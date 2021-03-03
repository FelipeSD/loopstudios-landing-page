import React from 'react';
import './home.scss';
import Navbar from "../../components/Navbar";

const Home = () => {
    return (
        <main className="mainHome">
            <div className="homeContainer .open-menu">
                <Navbar />
            </div>
        </main>
    )
}

export default Home;