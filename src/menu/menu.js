import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { UserInfo } from "./components/userInfo";

export class Menu extends Component {
  render() {
    return (
      <div className="page-wrapper chiller-theme toggled">
        <nav id="sidebar" className="sidebar-wrapper">
            <div className="sidebar-content">
                <div>
                    <img className="w-100 p-2" src={require('../images/logo.png')} alt=""/>
                </div>
                <div>
                    <UserInfo/>
                </div>
                <div className="sidebar-search">
                    <div>
                        <div className="input-group">
                            <input type="text" className="form-control search-menu" placeholder="Search..."/>
                            <div className="input-group-append">
                                <span className="input-group-text">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <ul>
                        <li className="header-menu">
                        <Link to="/"><i className='far fa-address-book'></i>Main</Link>
                        </li>
                        <li className="header-menu">
                        <Link to="/filesender"><i className='fas fa-file-export'></i>Send File</Link>
                        </li>
                        <li className="header-menu">
                        <Link to="/transactionSender"><i className='fab fa-ethereum' style={{color:'white'}}></i>Send Transaction</Link>
                        </li>
                        <li className="sidebar-dropdown">
                            <a>
                            <span><i className='far fa-clipboard'></i>Contracts</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <Link to="/recieveFiles?type=SEND"><i className='far fa-paper-plane'></i>Sended</Link>
                                    </li>
                                    <li>
                                        <Link to="/recieveFiles?type=RECEIVE"><i className='far fa-envelope-open'></i>Recieved</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a>
                            <span><i className='fas fa-exchange-alt'></i> Transactions</span>   
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <Link to="/recieveTrx?type=SEND"><i className='far fa-paper-plane'></i>Sended</Link>
                                    </li>
                                    <li>
                                        <Link to="/recieveTrx?type=RECEIVE"><i className='far fa-envelope-open'></i>Recieved</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="header-menu">
                            <span>Extra</span>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fa fa-book"></i>
                                <span>Documentation</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidebar-footer">
            </div>
        </nav>
    </div>

    );
  }
}