import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home'
import About from './Components/About'
import Login from './Components/Login'
import Registration from './Components/Registration'
import Protected from './Components/Protected'

import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link, 
  Redirect
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     
      <Router>
        <Nav />

        <switch>
          <Route path="/home">
            <Protected cmp={Home} />
          </Route>

          <Route path="/registration">
            <Registration />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/about">
            <Protected cmp={About} />
          </Route>

        </switch>
      </Router>

    </div>
  );
}

export default App;
