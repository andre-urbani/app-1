import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import './style.scss';

import Home from './components/Home'
import Navbar from './components/Navbar'

import * as serviceWorker from './serviceWorker';

const App = () => (

  <HashRouter>
    <Navbar />
    <Switch>

      <Route exact path="/" component={Home} />
      <Route exact path="/continents" component={Home} />
      <Route exact path="/continent" component={Home} />
      <Route exact path="/countries" component={Home} />
      <Route exact path="/country" component={Home} />
      <Route exact path="/urbanareas" component={Home} />
      <Route exact path="/urbanarea" component={Home} />
      <Route exact path="/city" component={Home} />

    </Switch>
  </HashRouter>

)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
