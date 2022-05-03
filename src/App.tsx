import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import UserContainer from './components/UserContainer';
import AboutUs from './components/AboutUs';
import DemoMap from './components/DemoMap';
import './App.css';
import DemoMapMarker from './components/DemoMapMarker';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<UserContainer />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/map" element={<DemoMap />} />
        <Route path="/demo-map-marker" element={<DemoMapMarker />} />
      </Routes>
    </>
  );
}

export default App;
