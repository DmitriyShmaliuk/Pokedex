import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './Home/Home';
import Start from './Start/Start';
import About from './About/About';
import Info from './Info/Info';

export default function App() {
  return (
    <div>
       <Router>
           <Home>
              <Switch>
                 <Route exact path = '/' component = {Start}/>
                 <Route path = '/about' component = {About}/>
                 <Route path = '/pokemons/:number' component = {Info}/>
              </Switch>
           </Home>
       </Router>
    </div>
  );
}