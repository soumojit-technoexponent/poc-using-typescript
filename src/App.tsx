import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import UserContainer from './components/UserContainer';
import AboutUs from './components/AboutUs';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<UserContainer />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
