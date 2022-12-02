import React, { useState, useEffect } from "react";
import EventCard from "../Components/EventCard";
import EventCardCrud from "../Components/EventCardCrud";
import "../Styles/Home.css";
import "../Styles/Crud.css";
import "../Styles/eventList.css";

function EventList(props) {

    if (props.crud) {
        return (
            <div className="container-cards2">
                {
                    props.events.map(event => (
                        <EventCardCrud
                            key={event._id}
                            id={event._id}
                            image={event.imgDir || "BadBunny"}
                            name={event.name}
                            date={event.date}
                            price={event.price}
                            place={event.place}
                            deleteEvent={props.deleteEvent}
                            editEvent={props.editEvent}
                        />
                    ))
                }
            </div>
        );
    } else {

        return (
            <>
                <div className="container-cards">
                    {
                        props.events.map(event => (
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
            </>
        );
    }

}

export default EventList;