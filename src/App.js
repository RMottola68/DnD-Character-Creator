import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Nav"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <>
      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
    </>
  );
}

export default App;
