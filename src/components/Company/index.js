import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Pagination from "react-js-pagination";

import { companyActions } from "../../_actions";
import { formActions } from "../../_actions";
import CompanyFilters from './CompanyFilters';
import CompanyAddButton from './CompanyAddButton';
import CompanySingle from './CompanySingle';
import CompanyForm from './CompanyForm';

const validate = values => {
    const errors = {}
    if (!values.company_name) {
        errors.company_name = 'Required'
    }

    if (!values.company_code) {
        errors.company_code = 'Required'
    }

    if (!values.website) {
        errors.company_code = 'Required'
    }

    return errors
}

class Company extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            edit: false,
            activePage: 1
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(companyActions.getAll());
    }

    handleEdit(id) {
        const { dispatch } = this.props;
        this.setState({
            edit: true
        });
        dispatch(companyActions.view(id));
    }

    onSubmit(values, dispatch) {
        if (this.state.edit)
            dispatch(companyActions.update(values, values.id));
        else
            dispatch(companyActions.add(values));

        dispatch(formActions.reset());
        document.getElementById("editCompany").click();
        this.setState({
            edit: false
        });
    }

    resetForm() {
        const { dispatch } = this.props;
        this.setState({
            edit: false
        });
        dispatch(formActions.reset());
    }

    normalizeBoolean(value) {
        if (value === "true") return true;
        if (value === "false") return false;
        return value;
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
    }

    render() {
        const { companies, view, handleSubmit } = this.props;

        return (
            <div className="company">
                <CompanyFilters />
                <CompanyAddButton />

                <div className="row">
                    <div className="col-lg-12">
                        <div className="box">
                            <div className="box-body">
                                <Pagination
                                    activePage={this.state.activePage}
                                    totalItemsCount={companies.data.length}
                                    onChange={this.handlePageChange}
                                    itemsCountPerPage={1}
                                />

                                <table className="table table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Company Name</th>
                                            <th>Website</th>
                                            <th>Status</th>
                                            <th>Created</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            companies.loading &&
                                            <tr>
                                                <td colSpan="100" align="center">
                                                    <span>
                                                        <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i> Loading...
                                                        </span>
                                                </td>
                                            </tr>
                                        }
                                        <CompanySingle
                                            companies={companies.data}
                                            loading={view.loading}
                                            handleEdit={this.handleEdit}
                                        />
                                    </tbody>
                                </table>

                                <Pagination
                                    activePage={this.state.activePage}
                                    totalItemsCount={companies.data.length}
                                    onChange={this.handlePageChange}
                                    itemsCountPerPage={1}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <CompanyForm
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

let CompanyPageForm = reduxForm({
    form: 'companyForm',
    validate,
    enableReinitialize: true
})(Company)

const mapStateToProps = (state) => ({
    companies: state.company.list,
    view: state.company.view,
    initialValues: state.company.view.data
})

let connectedCompanyPage = connect(mapStateToProps)(CompanyPageForm);

export { connectedCompanyPage as Company };