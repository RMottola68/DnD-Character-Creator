import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import './App.css';

import Navigation from "./Nav";
import SpellSearch from './SpellSearch';
import EquipmentSearch from './EquipmentSearch';
import Bookmarks from './Bookmarks';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [mySpells, setMySpells] = useState([]);
  const [myEquipment, setMyEquipment] = useState([]);

  function fetchMySpells() {
    fetch('http://localhost:8000/users/0')
    .then(res => res.json())
    .then(spellData =>{setMySpells(prevState => prevState = spellData.spells)})
    
  }
  
  function fetchMyEquipment() {
    fetch('http://localhost:8000/users/0')
    .then(res => res.json())
    .then(equipmentData => setMyEquipment(prevState => prevState = equipmentData.equipment))
  }

  useEffect(fetchMySpells, []);
  useEffect(fetchMyEquipment, []);

  return (
    <div>
      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/home" element={<Bookmarks mySpells={mySpells} myEquipment={myEquipment}/>} />
        <Route path="spells" element={<SpellSearch mySpells={mySpells} setMySpells={setMySpells} />} />
        <Route path="equipment" element={<EquipmentSearch myEquipment={myEquipment} setMyEquipment={setMyEquipment} />} />
      </Routes>
    </ div>

  );
}

export default App;
