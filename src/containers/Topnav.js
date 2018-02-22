import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Topnav extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            logout: false
        }
        this.doLogout = this.doLogout.bind(this);
    }
    
    doLogout(){
       this.setState({
           logout: true
       })
    }

    render() {
        if(this.state.logout)
            return <Redirect to={'/login'} />
            
        return (
            <header className="main-header">
                <a href="index2.html" className="logo">
                    <span className="logo-mini"><b>A</b>LT</span>
                    <span className="logo-lg"><b>Admin</b>LTE</span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown messages-menu">
                                <a className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-envelope-o"></i>
                                    <span className="label label-success">4</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 4 messages</li>
                                </ul>
                            </li>
                            <li className="dropdown user user-menu">
                                <a className="dropdown-toggle" data-toggle="dropdown">
                                    <img src="/img/user2-160x160.jpg" className="user-image" alt="User 1" />
                                    <span className="hidden-xs">Glow Touch Tech</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="user-header">
                                        <img src="/img/user2-160x160.jpg" className="img-circle" alt="User 2" />

                                        <p>
                                            Glow Touch Technologies
                                            <small>Member since Nov. 2012</small>
                                        </p>
                                    </li>
                                    <li className="user-footer">
                                        <div className="pull-left">
                                            <a className="btn btn-default btn-flat">Profile</a>
                                        </div>
                                        <div className="pull-right">
                                            <button className="btn btn-default btn-flat" onClick={this.doLogout}>Sign out</button>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

const mapStatetoProps = (state) => ({
	login: state.login	
})

export default connect(mapStatetoProps)(Topnav);