import React, { Component } from 'react';
import { connect } from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
import { toastConstants } from '../../constants';

class Toaster extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.toast.message && nextProps.toast.type) {     
            switch (nextProps.toast.type) {
                case toastConstants.SUCCESS:
                    toast.success(nextProps.toast.message);
                    break;
                case toastConstants.INFO:
                    toast.info(nextProps.toast.message);
                    break;
                case toastConstants.WARN:
                    toast.warn(nextProps.toast.message);
                    break;
                case toastConstants.ERROR:
                    toast.error(nextProps.toast.message);
                    break;
                default:
                    break;
            }

        }
    }

    render() {
        return (
            <ToastContainer autoClose={5000} />
        );
    }

}

function mapStateToProps(state) {
    const { toast } = state;
    return {
        toast
    };
}

export default connect(mapStateToProps)(Toaster);