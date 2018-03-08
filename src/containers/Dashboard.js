import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Source, NotFound } from '../components';
import { JobSource, Company, Users } from '../containers';

import Sidebar from '../containers/Sidebar';
import Topnav from '../containers/Topnav';
import Footer from '../containers/Footer';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <Topnav />
                <Sidebar />
                
                <div className="content-wrapper" style={{minHeight: '690px'}}>
                    <section className="content">
                        <Switch>
                            <Route path={`${this.props.match.url}/`} exact component={Home} />
                            <Route path={`${this.props.match.url}job-source`} component={JobSource} />
                            <Route path={`${this.props.match.url}source`} component={Source} />
                            <Route path={`${this.props.match.url}companies`} component={Company} />
                            <Route path={`${this.props.match.url}company/:companyId/users`} component={Users} />
                            <Route component={NotFound} />
                        </Switch>
                    </section>   
                </div>        

                <Footer />
            </div>
        )
    }
}

export default Dashboard;