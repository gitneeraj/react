import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Home, Jobs, Source, Users, Company } from '../components';
import Sidebar from '../containers/Sidebar';
import Topnav from '../containers/Topnav';
import Footer from '../containers/Footer';
// import { Sidebar } from './';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <Topnav />
                <Sidebar />
                
                <div className="content-wrapper" style={{minHeight: '690px'}}>
                    <section className="content">
                        <Route path={`${this.props.match.url}`} exact component={Home} />
                        <Route path={`${this.props.match.url}jobs`} component={Jobs} />
                        <Route path={`${this.props.match.url}source`} component={Source} />
                        <Route path={`${this.props.match.url}companies`} component={Company} />
                        <Route path={`${this.props.match.url}users`} component={Users} />
                    </section>   
                </div>        

                <Footer />
            </div>
        )
    }
}

export default Dashboard;