import React from "react";
import NavBar from "../Components/NavBar-2";
import CrudCard from "../Components/CrudCard";
import "../Styles/Crud.css";
import EventCard from "../Components/EventCardCrud";


function Crud(){
    return(
        <>  
            <div className="body2">
                <NavBar />
                <div className="container-crud">
                    <CrudCard />
                    <div className="container-cards2">
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
            </div>
        </>
    );
}

export default  Crud;