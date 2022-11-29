import React from "react";
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css';

function Banner() {
    return (
        <div className="container-banner">
            <h1 className="page-name">TicketBaker</h1>
            <div className="container-buttons">
                <a className="sign-in" href="#">Iniciar sesión</a>
                <a className="log-in" href="#">Registrarse</a>
            </div>
        </div>
    );
}

export default Banner;