import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import Home from './components/Home'
import * as serviceWorker from './serviceWorker';

const App = () => (

  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />

    </Switch>
  </HashRouter>

)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
