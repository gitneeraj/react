import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form'
import { companyActions } from "../../_actions";

class Company extends Component {

    constructor(props, context) {
        super(props, context);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(companyActions.getAll());
    }

    handleEdit(id) {
        const { dispatch } = this.props;
        dispatch(companyActions.view(id));        
    }

    renderLists(companies) {
        const { view } = this.props;        

        return (companies).map((company, index) => {
            return (<tr key={index}>
                <td>{index + 1}.</td>
                <td>{company.company_name}</td>
                <td>{company.website}</td>
                <td>{(company.active) ? 'Active' : 'Inactive'}</td>
                <td>{company.created_at}</td>
                <td>
                    <button className="btn bg-maroon btn-flat"><i className="fa fa-users"></i> Users</button>
                    <button className="btn bg-purple btn-flat"><i className="fa fa-briefcase"></i> Manage Jobs</button>
                    <button data-toggle="modal" data-target="#editCompany" disabled={view.loading} className="btn bg-orange btn-flat" onClick={() => this.handleEdit(company.id)}>
                        {(view.loading) ?
                            <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i> :
                            <i className="fa fa-pencil"></i>
                        }
                        &nbsp;Edit
                    </button>
                </td>
            </tr>)
        })
    }

    onSubmit(values, dispatch){
        dispatch(companyActions.update(values, values.id));
        dispatch(reset('companyForm'));
    }

    render() {
        const { companies, view, handleSubmit } = this.props;

        const normalizeBoolean = value => {
            if (value === "true") {
                return true;
            }
        
            if (value === "false") {
                return false;
            }
        
            return value;
        };

        return (
            <div className="company">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box">
                            <div className="box-header with-border">
                                <h3 className="box-title">Filters</h3>
                            </div>

                            <div className="box-body">
                                <div className="row">

                                </div>
                            </div>

                            <div className="box-footer">
                                <div className="row">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-warning pull-right" data-toggle="modal" data-target="#editCompany" data-backdrop="static"><i className="fa fa-plus"></i> Add Company</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="box">
                            <div className="box-body">
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
                                        {this.renderLists(companies.data)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="editCompany" className="modal fade" role="dialog">
                    <div className="modal-dialog">

                        <div className="modal-content">
                            <form onSubmit={handleSubmit(this.onSubmit)}>
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Edit Company - {view.data && view.data.company_name }</h4>
                            </div>
                            <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group form-black label-floating is-empty">
                                        <label className="control-label">Company Name <span className="text-danger">*</span></label>
                                        <Field name="company_name" min="3" max="200" className="form-control" component="input" type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group form-black label-floating is-empty">
                                        <label className="control-label">Company Code <span className="text-danger">*</span></label>
                                        <Field name="company_code" min="3" max="200" className="form-control" component="input" type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group form-black label-floating is-empty">
                                        <label className="control-label">Company Website <span className="text-danger">*</span></label>
                                        <Field name="website" className="form-control" component="input" type="url" />
                                    </div>
                                </div>                    
                                <div className="col-lg-6">
                                    <label className="control-label supporting-label">Active?</label>
                                    <div className="radio">
                                        <label className="form-label">
                                            <Field name="active" component="input" type="radio" value={true} normalize={normalizeBoolean} /> Yes
                                        </label>
                                        <label className="form-label">
                                            <Field name="active" component="input" type="radio" value={false} normalize={normalizeBoolean} /> No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

let CompanyPageForm = reduxForm({
    form: 'companyForm',
    enableReinitialize: true
  })(Company)

const mapStateToProps = (state) => ({
    companies: state.company.list,
    view: state.company.view,
    initialValues: state.company.view.data
})

let connectedCompanyPage = connect(mapStateToProps)(CompanyPageForm);

export { connectedCompanyPage as Company };