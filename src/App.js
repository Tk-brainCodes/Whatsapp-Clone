import React, {useState} from 'react';
import './App.css';
import Sidenav from './Components/Sidenav/Sidenav'
import Chat from './Components/Chat/Chat';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {useStateValue} from './stateProvider';



function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="App">
      <div className="app__body">
        {!user ? (
          <Login/>
        ) : (
          <Router>
          <Sidenav />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </Router>
      )}
      </div>
    </div>
  );
}

export default App;
