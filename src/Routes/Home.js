import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import '../Styles/Home.css';
import EventList from "../Components/EventList";

function Home() {

    const [events, setEvents] = useState([]);

    const loadEvents = async () => {
        const data = await fetch("https://ticker-backend.onrender.com/api/events");
        const events = await data.json();
        setEvents(events);
    }

    useEffect(() => {
        loadEvents();
    }, []);

    return (
        <>
            <div className="body">
                <NavBar />
                <EventList/>
            </div>
        </>
    );
}

export default Home;