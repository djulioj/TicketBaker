import React from "react";
import '../Styles/EventCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function EventCard() {
  return (
    <div className="container-card">
        <Card style={{ width: '18rem'}}>
            <img className="image" src="BadBunny.png" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>
    
  );
}

export default EventCard;

