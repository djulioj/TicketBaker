import React from "react";
import '../Styles/CrudCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CrudCard() {
    return (
        <div className="container-CrudCard">
            <Card style={{ width: '25rem', height:'35rem', marginLeft:'200px', position: 'fixed'}}>
                <Card.Body>
                    <Card.Title><b>Añadir evento</b></Card.Title>
                    <hr />
                    <p className='text2'>Nombre</p>
                    <input className='user'></input>
                    <p className='text2'>Fecha</p>
                    <input className='user' type={"date"}></input>
                    <p className='text2'>Precio</p>
                    <input className='user'></input>
                    <p className='text2'>Lugar</p>
                    <input className='user'></input>
                    <p className='text2'>Imagen</p>
                    <input type="file"  class="custom-file-input" id="image" />
                    <Button variant="primary" className="buy" >Guardar</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
  
export default CrudCard;