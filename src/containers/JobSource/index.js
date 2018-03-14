import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, change, getFormValues } from 'redux-form';
import * as moment from 'moment';

import { companyActions, jobSourceActions, formActions } from "../../_actions";
import { validateJobSourceForm } from '../../_helpers';
import { Filters, AddButton, Single, Form } from '../../components/JobSource';

class JobSource extends Component{

    constructor(props, context) {
        super(props, context);
        // Set Edit flag
        this.state = {
            edit: false,
            filters: {
                startDate: null,
                endDate: null,
                search: '',
                company: 0,
            }
        }
        this.getAllJobSources = this.getAllJobSources.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleKeyup = this.handleKeyup.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleDatepickerEvent = this.handleDatepickerEvent.bind(this);
    }

    componentWillMount() {
        const { dispatch } = this.props;
        this.getAllJobSources();
        dispatch(companyActions.getAll());
    }

    getAllJobSources(){
        const { dispatch } = this.props;
        dispatch(jobSourceActions.getAll());
    }

    handleKeyup(event){
        const { dispatch } = this.props;
        this.setState(state => ({
            ...state,
            filters: {
                ...state.filters,
                search: event.target.value
            }
        }), () => {
            dispatch(jobSourceActions.search(this.state.filters)); 
        })
        
    }

    handleOnChange(event){
        const { dispatch } = this.props;
        this.setState(state => ({
            ...state,
            filters: {
                ...state.filters,
                company: event.target.value
            }
        }), () => {
            dispatch(jobSourceActions.search(this.state.filters));
        })
    }

    handleDatepickerEvent(event, picker){
        const { dispatch, updateField } = this.props;
        updateField("filters.daterange", moment(picker.startDate).format("DD-MM-YYYY") + ' to ' + moment(picker.endDate).format("DD-MM-YYYY"));
        this.setState(state => ({
            ...state,
            filters: {
                ...state.filters,
                startDate: moment(picker.startDate).format("YYYY-MM-DD HH:mm:ss"),
                endDate: moment(picker.endDate).format("YYYY-MM-DD HH:mm:ss")
            }
        }), () => {
            dispatch(jobSourceActions.search(this.state.filters));
        })
    }

    handleEdit(id) {
        const { dispatch } = this.props;
        // Reset Edit flag
        this.setState({
            edit: true
        });
        dispatch(jobSourceActions.view(id));
    }

    onSubmit(values, dispatch) {
        if (this.state.edit)
            dispatch(jobSourceActions.update(values, values.id));
        else
            dispatch(jobSourceActions.add(values));                    

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
    
    render(){
        const { companies, jobSource, view, handleSubmit, reset, login } = this.props;

        return (
            <div className="jobSource">

                <Filters 
                    getAllJobSources={this.getAllJobSources}
                    companies={companies.data}
                    handleKeyup={this.handleKeyup}
                    handleOnChange={this.handleOnChange}
                    handleDatepickerEvent={this.handleDatepickerEvent}
                    reset={reset}
                />

                {
                    login.user.role === 'user' && 
                    <AddButton />
                }                

                <div className="row">
                    <div className="col-lg-12">
                        <div className="box">
                            <div className="box-body">

                                <table className="table table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Job Name</th>
                                            <th>Website URL</th>
                                            <th>Job Interval</th>
                                            <th>Status</th>
                                            <th>Created</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            jobSource.loading &&
                                            <tr>
                                                <td colSpan="100" align="center">
                                                    <span>
                                                        <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i> Loading...
                                                        </span>
                                                </td>
                                            </tr>
                                        }
                                        {
                                            !jobSource.loading && !jobSource.data.length &&
                                            <tr>
                                                <td colSpan="100" align="center">
                                                    <span>
                                                        No Records Found.
                                                    </span>
                                                </td>
                                            </tr>
                                        }
                                        <Single
                                            jobSources={jobSource.data}
                                            loading={view.loading}
                                            handleEdit={this.handleEdit}
                                        />
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
                
                <Form
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

let JobSourcePageForm = reduxForm({
    form: 'jobSourceForm',
    validate: validateJobSourceForm,
    enableReinitialize: true
})(JobSource)

const mapStateToProps = (state) => ({
    login: state.login.data,
    companies: state.company.list,
    jobSource: state.jobSource.list,
    view: state.jobSource.default,
    initialValues: state.jobSource.default,
    fieldValues: getFormValues('jobSourceForm')(state),
})

const mapDispatchToProps = {
    updateField: (field, data) => change( "jobSourceForm", field, data )
}

let connectedJobSourcePage = connect(mapStateToProps, mapDispatchToProps)(JobSourcePageForm);

export { connectedJobSourcePage as JobSource };