import React, { Component } from 'react';
import Home from '../components/Home/Home';
import Sidebar from '../containers/Sidebar'
import Topnav from '../containers/Topnav'
import Footer from '../containers/Footer'
import Jobs from '../components/Jobs/Jobs'
import Source from '../components/Source/Source'
import Users from '../components/Users/Users'
import { Route } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <Topnav />
                <Sidebar />
                
                <div className="content-wrapper" style={{minHeight: '690px'}}>
                    <section className="content">
                        <Route path={`${this.props.match.url}`} exact component={Home} />
                        <Route path={`${this.props.match.url}/jobs`} component={Jobs} />
                        <Route path={`${this.props.match.url}/source`} component={Source} />
                        <Route path={`${this.props.match.url}/companies`} component={Users} />
                    </section>   
                </div>        

                <Footer />
            </div>
        )
    }
}

export default Dashboard;