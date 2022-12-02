import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar-2";
import CrudCard from "../Components/CrudCard";
import "../Styles/Crud.css";
import EventCard from "../Components/EventCardCrud";
import EventList from "../Components/EventList";



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
                    <EventList 
                    crud={true}
                    />
                </div>
            </div>
        </>
    );
}

export default Crud;