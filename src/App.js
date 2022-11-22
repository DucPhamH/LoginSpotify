import './App.css';
import React from 'react';
import Login from './Page/Login';
import Register from './Page/Register';
import Home from './Page/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
         <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/login' element = {<Login/>}/>
            <Route path='/register' element = {<Register/>}/>
         </Routes>
        
      </div>
    </Router>
  );
}

export default App;
