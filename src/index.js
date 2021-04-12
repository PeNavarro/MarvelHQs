import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hq from './Hq';
//import {HashRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    {/*<HashRouter basename="/">
      <Switch>
        <Route path="/" component={App} exact/>
        <Route path="/Hq/:id" component={Hq}/>
      </Switch>
</HashRouter>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

