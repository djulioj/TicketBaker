import React from "react";
import '../Styles/CrudCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CrudCard() {
    return (
        <form className="container-CrudCard">
            <Card style={{ width: '25rem', height: '35rem', marginLeft: '200px', position: 'fixed' }}>
                <Card.Body>
                    <Card.Title><b>Administrar evento</b></Card.Title>
                    <hr />
                    <p className='text2'><b>Nombre</b></p>
                    <input className='user' id="nameCrud"></input>
                    <p className='text2'><b>Fecha</b></p>
                    <input className='user' id="dateCrud" type={"date"}></input>
                    <p className='text2'><b>Precio</b></p>
                    <input className='user' id="priceCrud"></input>
                    <p className='text2'><b>Lugar</b></p>
                    <input className='user' id="placeCrud"></input>
                    <p className='text2'><b>Imagen</b></p>
                    <input type="file" id="imgCrud" />
                    <Button variant="primary" className="buy" onClick={addUpdate} id="Save" >Guardar</Button>
                </Card.Body>
            </Card>
        </form>
    );
}


const addUpdate = async (e) => {

    const name =document.getElementById("nameCrud").value;
    const date=document.getElementById("dateCrud").value;
    const price=document.getElementById("priceCrud").value;
    const place=document.getElementById("placeCrud").value;
    const imgDir=document.getElementById("imgCrud").files;

    const event = new FormData();
    event.append("name", name);
    event.append("date", date);
    event.append("price", price);
    event.append("imgDir", imgDir[0]);
    event.append("place", place);
    const id=undefined;

    if (id) {
        console.log("update")
    } else {
        await fetch("https://ticker-backend.onrender.com/api/events", {
            method: "POST",
            body: event
        });
    }
}

export default CrudCard;