import React from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../Styles/NavBar.css';

function NavBar() {
    return (
        <div className="container">
            <h1 className="page-name">TicketBaker</h1>
            <div className="container-buttons">
                <Link className="sign-in" to={'/sign-in'}>
                    Iniciar sesión
                </Link>
                <Link className="log-in" to={'/log-in'}>
                   Registrarse
                </Link>
                <Link className="Crud" to={'/Crud'}>
                    <Button type="submit" className="CRUD">Administrar</Button>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;