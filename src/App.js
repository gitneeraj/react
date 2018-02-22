import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from "react-toastify";

// import { toastActions } from './_actions';
import { history } from './_helpers';
import { Routes } from './_routes';

class App extends Component {
    constructor(props) {
        super(props);

        // const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            //dispatch(toastActions.clear());
        });
    }

    render() {
        // const { toast } = this.props;
        return (
            <div>
                {/* {toast.message &&
                    <div className={`alert ${toast.type}`}>{toast.message}</div>
                } */}
                <ToastContainer/>
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