import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Menu extends Component {
  render() {
    return (
      <div className="col-sm page-wrapper chiller-theme toggled">
        <nav id="sidebar" className="sidebar-wrapper">
            <div className="sidebar-content">
                <div id="toggle-sidebar">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="sidebar-brand">
                    <a href="/">art exchange</a>
                </div>
                <div className="sidebar-header">
                    <div className="user-pic">
                        <img className="img-responsive img-rounded"  src={require('../images/user_icon.jpg')} alt="User icon"/>
                    </div>
                    <div className="user-info">
                        <span className="user-name">Jhon
                            <strong>Smith</strong>
                        </span>
                        <span className="user-role">Administrator</span>
                        <span className="user-status">
                            <i className="fa fa-circle"></i>
                            <span>Online</span>
                        </span>
                    </div>
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
                          <Link to="/rest">REST</Link>
                        </li>
                        <li className="header-menu">
                        <Link to="/">IFPS</Link>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="/">
                                <i className="fa fa-shopping-cart"></i>
                                <span>E-commerce</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="/">Products
                                            
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">Orders</a>
                                    </li>
                                    <li>
                                        <a href="/">Credit cart</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="/">
                                <i className="far fa-gem"></i>
                                <span>Components</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="/">General</a>
                                    </li>
                                    <li>
                                        <a href="/">Panels</a>
                                    </li>
                                    <li>
                                        <a href="/">Tables</a>
                                    </li>
                                    <li>
                                        <a href="/">Icons</a>
                                    </li>
                                    <li>
                                        <a href="/">Forms</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="/">
                                <i className="fa fa-chart-line"></i>
                                <span>Charts</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="/">Pie chart</a>
                                    </li>
                                    <li>
                                        <a href="/">Line chart</a>
                                    </li>
                                    <li>
                                        <a href="/">Bar chart</a>
                                    </li>
                                    <li>
                                        <a href="/">Histogram</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="/">
                                <i className="fa fa-globe"></i>
                                <span>Maps</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="/">Google maps</a>
                                    </li>
                                    <li>
                                        <a href="/">Open street map</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="header-menu">
                            <span>Extra</span>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fa fa-calendar"></i>
                                <span>Calendar</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fa fa-folder"></i>
                                <span>Examples</span>
                            </a>
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