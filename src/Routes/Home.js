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
                    <EventCard 
                    image="BadBunny"
                    name="Concierto BadBunny"
                    date="25 de noviembre"
                    price="200000"
                    place="Estadio el Campín"/>
                    <EventCard 
                    image="BadBunny"
                    name="Concierto BadBunny"
                    date="25 de noviembre"
                    price="200000"
                    place="Estadio el Campín"/>
                    <EventCard 
                    image="BadBunny"
                    name="Concierto BadBunny"
                    date="25 de noviembre"
                    price="200000"
                    place="Estadio el Campín"/>
                    <EventCard 
                    image="BadBunny"
                    name="Concierto BadBunny"
                    date="25 de noviembre"
                    price="200000"
                    place="Estadio el Campín"/>
                </div>
            </div>
        </>
    );
}

export default Home;