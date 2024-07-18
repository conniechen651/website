import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Properties from './Properties';

export default function MainSwitch() {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
        <Route path='/' element={<Home />} />
        <Route path='/properties' element={<Properties />} />
    </Routes>
  );
}
