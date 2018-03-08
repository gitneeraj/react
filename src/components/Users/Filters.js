import React from 'react';
import { Field } from 'redux-form';

import renderInput from '../FormElements/renderInput';

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
                                <Field name="search" component={renderInput} type="text" label="Users" onChange={handleKeyup} />
                            </div>
                            <button className="btn btn-success" style={{marginTop: "25px"}}><i className="fa fa-search"></i> Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}