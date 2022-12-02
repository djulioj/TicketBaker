import React, { useState, useEffect } from "react";
import EventCard from "../Components/EventCard";
import EventCardCrud from "../Components/EventCardCrud";
import "../Styles/Home.css";
import "../Styles/Crud.css";

function EvenList(props) {

    const [Events, setEvents] = useState([]);
    const loadEvents = async() => {
        const data = await fetch('https://ticker-backend.onrender.com/api/events');
        const event = await data.json();
        setEvents(event);
    }

    useEffect(() => {
      loadEvents();
    }, []);

    if (props.crud) {
        return (
            <div className="container-cards2">
                        {
                            Events.map(event => (
                                <EventCardCrud
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
        );    
    }else{
        return(
            <div className="container-cards">
                    {
                        Events.map(event => (
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
        );
    }
    
}

export default EvenList;