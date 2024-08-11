//import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';
import SignIn from './SignIn';
import Home from './Home';

export default function RouterComponent() {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Home />} path="/TakeABite" />
                <Route element={<NotFound />} path="*" />
            </Routes>
        </BrowserRouter>
    )
}