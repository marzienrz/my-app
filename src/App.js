import logo from './logo.svg';
import './App.css';
//import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//this is function

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          hello mehrnoosh!!!!!!!!!!
        </a>
      </header>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <hr />

          {/*
A <Switch> looks through all its children <Route>
elements and renders the first one whose path
matches the current URL. Use a <Switch> any time
you have multiple routes, but you want only one
of them to render at a time
*/}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
  function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }

  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }

  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }



}

export default App;
