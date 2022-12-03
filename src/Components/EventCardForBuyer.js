import React from "react";
import '../Styles/EventCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function EventCard(props) {

  var quantity = 0;

  const more = document.getElementById("more");
  const less = document.getElementById("less");
  const number = document.getElementById("number");

  if (more && less) {
    less.style.display = "none"; 


    less.addEventListener("click", (e) => {
      quantity--;
      number.innerHTML = `<p className="quantity">${quantity}</p >`;
      if(quantity == 0){
        less.style.display = "none";
      }
    });

    more.addEventListener("click", (e) => {
      quantity++;
      number.innerHTML = `<pclassName="quantity">${quantity}</p >`;
      less.style.display = "inline-block";
      if(quantity == 0){
        less.style.display = "none";
      }
    });


    
  }


  return (
    <div className="container-card">
      <Card style={{ width: '18rem' }}>
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
          <Button variant="primary" style={{ backgroundColor: '#2D3436', borderColor: '#2D3436', borderRadius: '28px' }} className="buy" >Comprar</Button>
          <Button variant="primary" style={{ backgroundColor: '#2D3436', borderColor: '#2D3436', display:"none" }} className="less" id="less" >-</Button>
          <p className="quantity" id="number">0</p>
          <Button variant="primary" style={{ backgroundColor: '#2D3436', borderColor: '#2D3436' }} className="more" id="more" >+</Button>
        </Card.Body>
      </Card>
    </div>

  );
}

export default EventCard;

