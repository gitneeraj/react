import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { userActions, formActions } from "../../_actions";
import { validateUserForm } from '../../_helpers';
import { Filters, AddButton } from '../../components/JobSource';

class JobSource extends Component{

    constructor(props, context) {
        super(props, context);
        this.handleKeyup = this.handleKeyup.bind(this);
    }

    handleKeyup(){

    }
    
    render(){

        return (
            <div className="users">

                <Filters 
                    handleKeyup={this.handleKeyup}
                />
                <AddButton />

            </div>
        )
    }
}

let JobSourcePageForm = reduxForm({
    form: 'jobSourceForm',
})(JobSource)

const mapStateToProps = (state) => ({
})

let connectedJobSourcePage = connect(mapStateToProps)(JobSourcePageForm);

export { connectedJobSourcePage as JobSource };