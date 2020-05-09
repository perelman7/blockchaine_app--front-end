import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { IpfsService } from "./ipfs/ipfsservice";
import { RestServiceApi } from "./rest/restService";
import { Menu } from "./menu/menu";


// ========================================

ReactDOM.render(
  
  <div className="container">
    <div className="row">
          <BrowserRouter>
            <Menu/>
            <Switch>
                <Route exact path="/" component={IpfsService}/>
                <Route path="/rest" component={RestServiceApi}/>
                <Route component={IpfsService}/>
            </Switch>
        </BrowserRouter>
    </div>
  </div>,
  document.getElementById('root')
);
