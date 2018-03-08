import React from 'react';
import { Field } from 'redux-form';

import renderInput from '../FormElements/renderInput';
import renderSelect from '../FormElements/renderSelect';

export const Filters = ({ handleKeyup }) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="box">
                    <div className="box-header with-border">
                        <h3 className="box-title">Filters</h3>
                    </div>

                    <div className="box-body">
                        <div className="row">
                            <div className="col-sm-12 col-lg-4">
                                <Field name="search" component={renderInput} type="text" label="Search" onChange={handleKeyup} />
                            </div>

                            <div className="col-sm-12 col-lg-4">
                                <Field name="daterange" component={renderInput} type="text" label="Select Date Range" />
                            </div>
                            
                            <div className="col-sm-12 col-lg-4">
                                <Field name="company" component={renderSelect} label="Select Company" isRequired="true">
                                    <option></option>
                                </Field>
                            </div>

                            <div className="col-sm-12 col-lg-12">
                                <button className="btn btn-success pull-right" style={{marginTop: "25px"}}><i className="fa fa-search"></i> Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}