import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import { renderInput } from '../FormElements';

export const Form = ({handleSubmit, onSubmit, view, normalizeBoolean, resetForm}) => {

    return (
        <div id="editCompany" className="modal fade" role="dialog">
            <div className="modal-dialog">

                <div className="modal-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Field name="status" type="hidden" component="input" />
                    <div className="modal-header">
                        <button type="button" id="close-modal" className="close" data-dismiss="modal" onClick={resetForm}>&times;</button>
                        <h4 className="modal-title">Edit Company - {view.data && view.data.company_name }</h4>
                    </div>
                    <div className="modal-body">
                    <div className="row">
                        <div className="col-lg-6">
                            <Field name="company_name" min="3" max="200" component={renderInput} type="text" isRequired="true" label="Company Name" />
                        </div>
                        <div className="col-lg-6">
                            <Field name="company_code" min="3" max="200" component={renderInput} type="text" isRequired="true" label="Company Code" />
                        </div>
                        <div className="col-lg-6">
                            <Field name="website" component={renderInput} type="url" isRequired="true" label="Company Website" />
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

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    view: PropTypes.object.isRequired,
    normalizeBoolean: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired
};