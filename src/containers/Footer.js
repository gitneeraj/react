import React, { Component } from 'react';

export default class Footer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            year: 0
        }
    }

    componentWillMount(){
        let d = new Date();
        this.setState({
            year: d.getFullYear()
        })
    }
    
    render() {
        let year = this.state.year;
        return (
            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                    <b>Version</b> 1.0
                </div>
                <strong>Copyright &copy; {year}</strong> All rights reserved.
          </footer>
        );
    }
}