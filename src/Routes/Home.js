import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import '../Styles/Home.css';
import EventList from "../Components/EventList";

function Home(props) {

    return (
        <>
            <div className="body">
                <NavBar />
                <EventList events={props.events} />
            </div>
        </>
    );
}

export default Home;