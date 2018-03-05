import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import UserFilters from './UserFilters';
import UserAddButton from './UserAddButton';
// import UserSingle from './UserSingle';
// import UserForm from './UserForm';

class Users extends Component{

    constructor(props, context) {
        super(props, context);
        this.handleKeyup = this.handleKeyup.bind(this);
    }
    
    handleKeyup(event){
        // const { dispatch } = this.props;
        // dispatch(companyActions.search({search: event.target.value}));  
    }

    render(){
        return (
            <div className="users">

                <UserFilters
                    handleKeyup={this.handleKeyup} 
                />

                <UserAddButton />

                <div className="row">
                    <div className="col-lg-12">
                        <div className="box">
                            <div className="box-body">

                                <table className="table table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Role</th>
                                            <th>Status</th>
                                            <th>Created</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

let UserPageForm = reduxForm({
    form: 'userForm',
})(Users)

const mapStateToProps = (state) => ({
    companies: state.company.list,
    view: state.company.view,
    initialValues: state.company.view.data
})

let connectedUserPage = connect(mapStateToProps)(UserPageForm);

export { connectedUserPage as Users };