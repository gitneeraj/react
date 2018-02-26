import React, { Component } from 'react';
import { connect } from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import { toastConstants } from '../../_constants';

const Message = ({ type, content }) => {
    let icon = '';
    switch(type){
        case 'success':
            icon = <i className="fa fa-check-circle"></i>;
        break;
        case 'error': 
            icon = <i className="fa fa-times-circle"></i>;
        break;
        case 'info': 
            icon = <i className="fa fa-info-circle"></i>;
        break;
        case 'warning': 
            icon = <i className="fa fa-exclamation-circle"></i>;
        break;
        default:
            icon = ''; 
        break;
    }
    return (
        <div>
             {icon} {content}
        </div>
    );
};

class Toaster extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.toast.message && nextProps.toast.type) { 
            toast.dismiss();    
            switch (nextProps.toast.type) {
                case toastConstants.SUCCESS:
                    toast.success(<Message content={nextProps.toast.message} type="success" />);
                    break;
                case toastConstants.INFO:
                    toast.info(<Message content={nextProps.toast.message} type="info" />);
                    break;
                case toastConstants.WARN:
                    toast.warn(<Message content={nextProps.toast.message} type="warning" />);
                    break;
                case toastConstants.ERROR:
                    toast.error(<Message content={nextProps.toast.message} type="error" />);
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

Message.propTypes = {
    type: PropTypes.string,
    content: PropTypes.string
};

export default connect(mapStateToProps)(Toaster);