import React, { useState, useEffect } from 'react';

import Enter from './components/Enter.js';
import Game from './components/Game.js';
import Loading from './components/Loading.js';

import tunnelNinjas from './assets/images/tunnelNinjas.svg';
import './App.css';

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const logout = props => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (localStorage.token) setIsLoggedIn(true);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={tunnelNinjas} alt="Tunnel Ninjas logo" />
      </header>
      {isLoading ? (
        <Loading />
      ) : isLoggedIn ? (
        <Game props={props} logout={logout} />
      ) : (
        <Enter setIsLoading={setIsLoading} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
