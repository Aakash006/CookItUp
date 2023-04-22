import React from 'react'
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Cuisine from '../pages/Cuisine';
import Searched from '../pages/Searched';
import Details from './Details';

function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/searched/:term" element={<Searched />} />
            <Route path="/details/:id" element={<Details />} />
        </Routes>
    )
}

export default Pages
