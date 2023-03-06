import React from 'react';
import './App.css';
import './css/style.css';
import './css/responsive.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
