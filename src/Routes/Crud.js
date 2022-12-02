import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar-2";
import CrudCard from "../Components/CrudCard";
import "../Styles/Crud.css";
import EventCard from "../Components/EventCardCrud";
import EventList from "../Components/EventList";



function Crud(props) {

    return (
        <>
            <div className="body2">
                <NavBar />
                <div className="container-crud">
                    <CrudCard createEvent={props.createEvent} />
                    <EventList 
                    events={props.events}
                    deleteEvent = {props.deleteEvent}
                    crud={true}
                    />
                </div>
            </div>
        </>
    );
}

export default Crud;