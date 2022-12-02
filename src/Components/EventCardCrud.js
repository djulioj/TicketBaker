import React from "react";
import '../Styles/EventCardCrud.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function EventCard(props) {
  return (
    <div className="container-card3">
        <Card style={{ width: '18rem'}}>
            <img className="image" src={`${props.image}.png`} />
            <Card.Body>
                <Card.Title><b>{props.name}</b></Card.Title>
                <hr />
                <Card.Text >
                <b>Fecha: </b>{props.date}
                </Card.Text>
                <Card.Text>
                <b>Precio: </b>${props.price}
                </Card.Text>
                <Card.Text>
                <b>Lugar: </b>{props.place}
                </Card.Text>
                <Button variant="primary" className="buy" >Eliminar</Button> 
            </Card.Body>
        </Card>
    </div>
    
  );
}

export default EventCard;

