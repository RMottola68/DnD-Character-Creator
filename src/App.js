import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoggedIn from './LoggedIn'
import Login from "./Login"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <>
      {loggedIn ? <LoggedIn /> : <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/> }
    </>
  );
}

export default App;
