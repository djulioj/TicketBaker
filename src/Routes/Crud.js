import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar-2";
import CrudCard from "../Components/CrudCard";
import "../Styles/Crud.css";
import EventCard from "../Components/EventCardCrud";


function Crud() {

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
            <div className="body2">
                <NavBar />
                <div className="container-crud">
                    <CrudCard />
                    <div className="container-cards2">
                        {
                            events.map(event => (
                                <EventCard
                                    key={event._id}
                                    image={event.imgDir || "BadBunny"}
                                    name={event.name}
                                    date={event.date}
                                    price={event.price}
                                    place={event.place}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Crud;