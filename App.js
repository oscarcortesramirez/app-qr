import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import QRGenerate from './screen/QRGenerate';
import Home from './screen/Home';
import Escanear from './screen/Escanear';

export default function App() {
  
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='qr-generate' element={<QRGenerate />} />
        <Route path='escanear' element={<Escanear />} />
      </Routes>
    </div>
  );
}