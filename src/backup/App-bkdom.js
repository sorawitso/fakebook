import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





function Home() { return <h2>Home</h2>;}
function About() { return <h2>About</h2>;}
function Users() { return <h2>Users</h2>;}
function App() {
  return (
    <Router>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About </Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </nav>
    <div>
      <Switch>
        <Route path="/about"><About /></Route>
        <Route path="/users"><Users /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </div>
  </Router>
);
}


export default App;
