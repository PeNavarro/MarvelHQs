import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hq from './Hq';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact/>
        <Route path="/Hq/:id" component={Hq}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

