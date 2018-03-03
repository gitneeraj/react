import React, { Component } from 'react';

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

export default (App);