import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './components/home';
import Start from './components/start';
import About from './components/about';

export default function App() {
  return (
    <div>
       <Router>
           <Home>
              <Switch>
                 <Route exact path = '/' component = {Start}/>
                 <Route path = '/about' component = {About}/>
              </Switch>
           </Home>
       </Router>
    </div>
  );
}
