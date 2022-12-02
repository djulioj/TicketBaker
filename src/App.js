import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Sign from './Routes/sign-in';
import Log from './Routes/log-in';
import Crud from './Routes/Crud';


function App() {

  const [_id, setId] = useState("");
  const [event, setEvent] = useState({});

  const [events, setEvents] = useState([]);
  const loadEvents = async () => {
    const data = await fetch("https://ticker-backend.onrender.com/api/events");
    const event = await data.json();
    setEvents(event);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const createEvent = async (newEvent) => {
    if (_id) {
      // const response = await fetch(
      //   "https://ticker-backend.onrender.com/api/events/"+_id,
      //   {
      //     method: "PUT",
      //     body: newEvent,
      //     // headers: {
      //     //   Accept: "application/json",
      //     //   "Content-Type": "application/json",
      //     // },
      //   }
      // );
      // console.log("llego");
    } else {
      const response = await fetch(
        "https://ticker-backend.onrender.com/api/events",
        {
          method: "POST",
          body: newEvent,
          // headers: {
          //   Accept: "application/json",
          //   "Content-Type": "application/json",
          // },
        }
      );
      console.log("oaaa");
    }
    loadEvents();
  };

  const deleteEvent = async (id) => {
    const response = await fetch(
      "https://ticker-backend.onrender.com/api/events/" + id,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      }
    );
    loadEvents();
  };

  const editEvent = async (id) => {
    const data = await fetch(
      "https://ticker-backend.onrender.com/api/events/" + id
    );
    const event = await data.json();
    setId(event._id);
    setEvent(event);
  };


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home events={events} />} />
          <Route path="/sign-in" element={<Sign />} />
          <Route path="/log-in" element={<Log />} />
          <Route path="/crud" element={
            <Crud
              events={events}
              event={event}
              id={_id}
              createEvent={createEvent}
              deleteEvent={deleteEvent}
              editEvent={editEvent}
            />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
