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
import { Nav } from 'react-bootstrap';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <div>
      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/home" element={<Bookmarks />} />
        <Route path="spells" element={<SpellSearch />} />
        <Route path="equipment" element={<EquipmentSearch />} />
      </Routes>
    </ div>

  );
}

export default App;
