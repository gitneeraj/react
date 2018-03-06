import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { userActions } from "../../_actions";
import { formActions } from "../../_actions";
import { validateUserForm } from '../../_helpers';
import UserFilters from './UserFilters';
import UserAddButton from './UserAddButton';
import UserSingle from './UserSingle';
import UserForm from './UserForm';

class Users extends Component{

    constructor(props, context) {
        super(props, context);
        // Set Edit flag
        this.state = {
            edit: false,
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleKeyup = this.handleKeyup.bind(this);
    }
    
    componentWillMount() {
        const { dispatch, match: { params } } = this.props;
        dispatch(userActions.getAll(params.companyId));
    }

    handleEdit(id) {
        const { dispatch } = this.props;
        // Reset Edit flag
        this.setState({
            edit: true
        });
        dispatch(userActions.view(id));
    }

    onSubmit(values, dispatch) {
        if (this.state.edit)
            dispatch(userActions.update(values, values.id));
        else
            dispatch(userActions.add(values));                    

        // Reset Form
        dispatch(formActions.reset());
        // Close Form
        document.getElementById("close-modal").click();
        // Reset Edit flag
        this.setState({
            edit: false
        });
    }

    resetForm() {
        const { dispatch } = this.props;
        // Reset Edit flag
        this.setState({
            edit: false
        });
        // Reset Form
        dispatch(formActions.reset());
    }

    normalizeBoolean(value) {
        if (value === "true") return true;
        if (value === "false") return false;
        return value;
    }

    handleKeyup(event){
        const { dispatch } = this.props;
        dispatch(userActions.search({search: event.target.value}));  
    }

    render(){
        const { users, view, handleSubmit } = this.props;

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
                                        {
                                            users.loading &&
                                            <tr>
                                                <td colSpan="100" align="center">
                                                    <span>
                                                        <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i> Loading...
                                                        </span>
                                                </td>
                                            </tr>
                                        }
                                        {
                                            !users.loading && !users.data.length &&
                                            <tr>
                                                <td colSpan="100" align="center">
                                                    <span>
                                                        No Records Found.
                                                    </span>
                                                </td>
                                            </tr>
                                        }
                                        <UserSingle
                                            users={users.data}
                                            loading={view.loading}
                                            handleEdit={this.handleEdit}
                                        />
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>

                <UserForm
                    handleSubmit={handleSubmit}
                    onSubmit={this.onSubmit}
                    view={view}
                    normalizeBoolean={this.normalizeBoolean}
                    resetForm={this.resetForm}
                />
            </div>
        )
    }
}

let UserPageForm = reduxForm({
    form: 'userForm',
    validate: validateUserForm,
    enableReinitialize: true
})(Users)

const mapStateToProps = (state) => ({
    users: state.user.list,
    view: state.user.view,
    initialValues: state.user.view.data
})

let connectedUserPage = connect(mapStateToProps)(UserPageForm);

export { connectedUserPage as Users };