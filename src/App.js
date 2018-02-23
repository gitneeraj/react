import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Routes } from './_routes';
import  Toaster  from './components/Toaster/Toaster';

class App extends Component {
    render() {
        return (
            <div>
                <Toaster/>
                <Routes />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { toast } = state;
    return {
        toast
    };
}

export default connect(mapStateToProps)(App);