import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { SenderFile } from "./ipfs/senderFile";
import { Menu } from "./menu/menu";
import { Main } from "./menu/components/main";
import { SenderTransaction } from "./rest/senderTransaction";
import { RecieverFiles } from "./rest/recieverFiles";
import { RecieverTransaction } from "./rest/recieverTransactions";

import { Login } from "./login/login";

// ========================================
function rend(){
  let jwt = window.sessionStorage.getItem("jwt");
  if(jwt){
    return (
      <div className="container">
      <div className="row">
            <BrowserRouter>
              <Menu/>
              <Switch>
                  <Route exact path="/" component={Main}/>
                  <Route exact path="/filesender" component={SenderFile}/>
                  <Route exact path="/transactionSender" component={SenderTransaction}/>
                  <Route exact path="/recieveTrx" component={RecieverTransaction}/>
                  <Route exact path="/recieveFiles" component={RecieverFiles}/>
                  <Route component={Main}/>
              </Switch>
          </BrowserRouter>
      </div>
    </div>
    );
  }else{
    return <Login/>;
  }
  
}

ReactDOM.render(
  <div>
    {rend()}
  </div>,
  document.getElementById('root')
);
