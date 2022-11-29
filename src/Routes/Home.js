import React from "react";
import EventCard from "../Components/EventCard";
import NavBar from "../Components/NavBar";
import '../Styles/Home.css';

function Home() {
    return (
        <>
            <div className="body">
                <NavBar />
                <div className="container-cards">
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </div>
            </div>
        </>
    );
}

export default Home;