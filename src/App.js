import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Routes/Home';
import Sign from './Routes/sign-in';
import Log from './Routes/log-in';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sign-in" element={<Sign />}/>
          <Route path="/log-in" element={<Log />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
