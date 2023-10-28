import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import QRGenerate from './screen/QRGenerate';
import Home from './screen/Home';

export default function App() {
  
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='qr-generate' element={<QRGenerate />} />
      </Routes>
    </div>
  );
}