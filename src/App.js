import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Nav"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <>
      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
    </>
  );
}

export default App;
