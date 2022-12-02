import {useState} from "react";
import '../Styles/CrudCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CrudCard(props) {

    const [name, setName] = useState("");
    const [date, setDate] = useState(Date.now);
    const [place, setPlace] = useState("");
    const [price, setPrice] = useState(0);
    const [imgDir, setImgDir] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvent = {
            name,
            date,
            place,
            price,
            imgDir,
        };
        props.createEvent(newEvent);
        document.getElementById("crudForm").reset();
    };

    return (
        <form className="container-CrudCard" id="crudForm" onSubmit={handleSubmit}>
            <Card
                style={{
                    width: "25rem",
                    height: "38rem",
                    marginLeft: "200px",
                    position: "fixed",
                }}
            >
                <Card.Body>
                    <Card.Title>
                        <b>Administrar evento</b>
                    </Card.Title>
                    <hr />
                    <p className="text2">
                        <b>Nombre</b>
                    </p>
                    <input
                        className="user"
                        id="nameCrud"
                        onChange={(e) => setName(e.target.value)}
                        defaultValue={props.id?props.event.name:""}
                    ></input>
                    <p className="text2">
                        <b>Fecha</b>
                    </p>
                    <input
                        className="user"
                        id="dateCrud"
                        type={"date"}
                        onChange={(e) => setDate(e.target.value)}
                        defaultValue={props.id?props.event.date:""}
                    ></input>
                    <p className="text2">
                        <b>Precio</b>
                    </p>
                    <input
                        className="user"
                        id="priceCrud"
                        type="number"
                        onChange={(e) => setPrice(e.target.value)}
                        defaultValue={props.id?props.event.price:""}
                    ></input>
                    <p className="text2">
                        <b>Lugar</b>
                    </p>
                    <input
                        className="user"
                        id="placeCrud"
                        onChange={(e) => setPlace(e.target.value)}
                        defaultValue={props.id?props.event.place:""}
                    ></input>
                    <p className="text2">
                        <b>Imagen</b>
                    </p>
                    <input
                        type="file"
                        id="imgCrud"
                        style={{marginTop:"15px"}}
                        onChange={(e) => setImgDir(e.target.value)}
                        defaultValue={props.id?props.event.imgDir:""}
                    />
                    <Button variant="primary" className="save" type="submit" id="Save">
                        Guardar
                    </Button>
                </Card.Body>
            </Card>
        </form>
    );
}


const addUpdate = async (e) => {

    const name = document.getElementById("nameCrud").value;
    const date = document.getElementById("dateCrud").value;
    const price = document.getElementById("priceCrud").value;
    const place = document.getElementById("placeCrud").value;
    const imgDir = document.getElementById("imgCrud").files;

    const event = new FormData();
    event.append("name", name);
    event.append("date", date);
    event.append("price", price);
    event.append("imgDir", imgDir[0]);
    event.append("place", place);
    const id = undefined;

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