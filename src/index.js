import React  from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import Tablacandidatos from './pages/Tabla_candidatos';
import DetailsData from './pages/Details_Data';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="tabla" element={ <Tablacandidatos/> } />
      <Route path="tabla/details" element={ <DetailsData /> } />
    </Routes>
  </BrowserRouter>,
  rootElement
);

