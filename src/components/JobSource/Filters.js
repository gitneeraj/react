import React from 'react';
import { Field } from 'redux-form';

import { renderInput, renderSelect, renderDateRangePicker } from '../FormElements';

export const Filters = ({ 
    getAllJobSources,
    companies,    
    handleKeyup,
    handleOnChange,
    handleDatepickerEvent,
    reset
}) => {

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
                                <Field name="filters.search" component={renderInput} type="text" label="Search" onChange={handleKeyup} />
                            </div>

                            <div className="col-sm-12 col-lg-4">
                                <Field name="daterangewrapper" component={renderDateRangePicker} handleDatepickerEvent={handleDatepickerEvent}>
                                    <Field name="filters.daterange" component={renderInput} type="text" label="Select Date Range" />
                                </Field>
                            </div>
                            
                            <div className="col-sm-12 col-lg-4">
                                <Field name="filters.company" component={renderSelect} label="Select Company" onChange={handleOnChange}>
                                    <option value="0">-- Select Company --</option>
                                    {
                                        (companies).map((company, index) => {
                                            return <option key={index} value={company.id}>{company.company_name}</option>
                                        })
                                    }
                                </Field>
                            </div>

                            <div className="col-sm-12 col-lg-12">
                                <button className="btn btn-default pull-right" onClick={() => {reset();getAllJobSources();}}><i className="fa fa-reset"></i> Reset</button>
                                <button className="btn btn-success pull-right"><i className="fa fa-search"></i> Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}