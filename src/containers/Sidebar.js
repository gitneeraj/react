import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Sidebar extends Component {
    render(){
        return (
            <aside className="main-sidebar">
            <section className="sidebar">
                <div className="user-panel">
                    <div className="pull-left image">
                        <img src="/img/user2-160x160.jpg" className="img-circle" alt="user" />
                    </div>
                    <div className="pull-left info">
                        <p>Glow Touch Technologies</p>
                        <a><i className="fa fa-circle text-success"></i> Online</a>
                    </div>
                </div>
                <ul className="sidebar-menu" data-widget="tree">
                    <li className="header">MAIN NAVIGATION</li>
                    <li className="treeview">
                        <NavLink to="/" exact activeClassName="active">
                            <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="treeview">
                        <NavLink to="/jobs" exact activeClassName="active">
                            <i className="fa fa-briefcase"></i> <span>Job Source</span>
                        </NavLink>
                    </li>
                    <li className="treeview">
                        <NavLink to="/companies" exact activeClassName="active">
                            <i className="fa fa-adn"></i> <span>Companies</span>
                        </NavLink>
                    </li>
                </ul>
            </section>
        </aside>
        );
    }
}

export default Sidebar;