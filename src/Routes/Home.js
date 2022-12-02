import React, { useEffect, useState } from "react";
import EventCard from "../Components/EventCard";
import NavBar from "../Components/NavBar";
import '../Styles/Home.css';

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
                <div className="container-cards">
                    {
                        events.map(event => (
                            <EventCard
                                key={event._id}
                                image={event.imgDir||"BadBunny"}
                                name={event.name}
                                date={event.date}
                                price={event.price}
                                place={event.place}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Home;