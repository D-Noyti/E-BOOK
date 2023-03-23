import React from 'react';
import Main from './Componenets/Main';
import './Componenets/style.css'
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import About from './Componenets/About';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/About" element={<About/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
