//Importação de tudo que é usado
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hq from './Hq';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    {/*Definição do Router com basename compatível para o gh-pages*/}
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    {/*Implementação do Switch para não ocorrer erro nas trocas de páginas*/}
      <Switch>
    {/*Definição das rotas possíves, passando se necessários, os parâmetros requisitados*/}
        <Route path="/" component={App} exact/>
        <Route path="/Hq/:id" component={Hq}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

