import React from 'react';
import { Field } from 'redux-form';

import { renderInput, renderSelect } from '../FormElements';

export const Form = ({handleSubmit, onSubmit, view, normalizeBoolean, resetForm}) => {

    return (
        <div id="editUser" className="modal fade" role="dialog">
            <div className="modal-dialog">

                <div className="modal-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="modal-header">
                        <button type="button" id="close-modal" className="close" data-dismiss="modal" onClick={resetForm}>&times;</button>
                        <h4 className="modal-title">Add User - {view.data && view.data.company_name }</h4>
                    </div>
                    <div className="modal-body">
                    <div className="row">
                        <div className="col-lg-6">
                            <Field name="name" min="3" max="200" component={renderInput} type="text" isRequired="true" label="Name" />
                        </div>
                        <div className="col-lg-6">
                            <Field name="email" component={renderInput} type="email" isRequired="true" label="Email" />
                        </div>
                        <div className="col-lg-6">
                            <Field name="phone" component={renderInput} type="number" isRequired="true" label="Phone" />
                        </div>
                        <div className="col-lg-6">
                            <Field name="role" component={renderSelect} label="Role" isRequired="true">
                                <option></option>
                                <option value="user">User</option>
                                <option value="developer">Developer</option>
                                <option value="admin">Admin</option>
                            </Field>
                        </div>                    
                        <div className="col-lg-6">
                            <label className="control-label supporting-label">Active?</label>
                            <div className="radio">
                                <label className="form-label">
                                    <Field name="active" component="input" type="radio" value={true} normalize={normalizeBoolean} /> Yes
                                </label>{' '}
                                <label className="form-label">
                                    <Field name="active" component="input" type="radio" value={false} normalize={normalizeBoolean} /> No
                                </label>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={resetForm}>Close</button>
                    </div>
                    </form>
                </div>

            </div>
        </div>
    );
}