import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Sign from './Routes/sign-in';
import Log from './Routes/log-in';
import Crud from './Routes/Crud';


function App() {

  const [events, setEvents] = useState([]);
  const loadEvents = async () => {
    const data = await fetch("https://ticker-backend.onrender.com/api/events");
    const event = await data.json();
    setEvents(event);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const createEvent = async (event) => {
    const response = await fetch("https://ticker-backend.onrender.com/api/events", {
      method: "POST",
      body: JSON.stringify(event),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
    console.log(response);
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

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home events={events} />} />
          <Route path="/sign-in" element={<Sign />} />
          <Route path="/log-in" element={<Log />} />
          <Route path="/crud" element={<Crud events={events} createEvent={createEvent} deleteEvent={deleteEvent} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
