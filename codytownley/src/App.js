import React from 'react';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Nav from "./Components/Nav";
import Home from './Pages/Home';
import Crown from './Pages/CrownClothing';
import Crestview from './Pages/Crestview';
import LiveChat from './Pages/LiveChat';

const App = () => {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crown" element={<Crown />} />
        <Route path="/crestview" element={<Crestview />} />
        <Route path="/live" element={<LiveChat />} />
      </Routes>
    </Router>
  );
};

export default App;

