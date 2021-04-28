/* Function imports */
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

/* Component imports */
import NavBar from './components/navbar/navbar.js';
import home from './components/home.js';
import about from './components/about.js';
import errorPage from './components/errorPage.js';

/* Style imports */
import './App.css';

const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="App">
      <div className="container">
        <Router>
          <NavBar />
            <div className="wrapper">
              <Switch>
                <Route exact path="/" exact component={ home } />
                <Route path="/about" exact component={ about } />
                <Route to="/404" exact component={ errorPage } />
                <Redirect path="/404" exact component={ errorPage } />
              </Switch>
            </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
