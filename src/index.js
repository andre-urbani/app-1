import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import './style.scss';

import Home from './components/Home'
import Navbar from './components/Navbar'
import Continents from './components/Continents'
import Continent from './components/Continent'
import Countries from './components/Countries'
import Country from './components/Country'
import UrbanAreas from './components/UrbanAreas'
import UrbanArea from './components/UrbanArea'
import City from './components/City'
import GraphTest from './components/GraphTest'
import GraphTestTwo from './components/GraphTestTwo'

import * as serviceWorker from './serviceWorker';

const App = () => (

  <HashRouter>
    <Navbar />
    <Switch>

      <Route exact path="/" component={Home} />
      <Route exact path="/continents" component={Continents} />
      <Route exact path="/continent" component={Continent} />
      <Route exact path="/countries" component={Countries} />
      <Route exact path="/country" component={Country} />
      <Route exact path="/urbanareas" component={UrbanAreas} />
      <Route exact path="/urbanarea" component={UrbanArea} />
      <Route exact path="/city" component={City} />
      <Route exact path="/graph" component={GraphTest} />
      <Route exact path="/graph2" component={GraphTestTwo} />

    </Switch>
  </HashRouter>

)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
