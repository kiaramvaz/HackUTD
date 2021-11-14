import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Club from './components/pages/Club';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Club />

      </Router>
    </>
  );
}

export default App;