import React from 'react';
import { Field } from 'redux-form';

import renderInput from '../FormElements/renderInput';
import renderTextArea from '../FormElements/renderTextArea';

export const Form = ({handleSubmit, onSubmit, view, normalizeBoolean, resetForm}) => {
    
    return (
        <div id="newScrapeRequestModal" className="modal fade" role="dialog">
            <div className="modal-dialog">

                <div className="modal-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Field name="status" type="hidden" component="input" />
                    <div className="modal-header">
                        <button type="button" id="close-modal" className="close" data-dismiss="modal" onClick={resetForm}>&times;</button>
                        <h4 className="modal-title">Add Job Source - {view && view.name }</h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-lg-6">
                                <Field name="name" component={renderInput} type="text" isRequired="true" label="Job Name" />
                            </div>
                            <div className="col-lg-6">
                                <Field name="weburl" component={renderInput} type="url" isRequired="true" label="Website URL" />
                            </div>
                            <div className="col-lg-12">
                                <Field name="fetcher_details" component={renderTextArea} label="Details of content to be fetched" />
                            </div>
                            <div className="col-lg-12">
                                <Field name="input_criteria" component={renderTextArea} label="Input Criteria" />
                            </div>
                            <div className="col-lg-6">
                                <label className="control-label supporting-label">How do you want the content to be delivered?</label>
                                <div className="radio">
                                    <label className="form-label">
                                        <Field name="deliver_format" component="input" type="radio" value="XML" /> XML
                                    </label>{' '}
                                    <label className="form-label">
                                        <Field name="deliver_format" component="input" type="radio" value="CSV" /> CSV
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <label className="control-label supporting-label">How often do you want to scrape?</label>
                                <div className="radio">
                                    <label className="form-label">
                                        <Field name="job_interval" component="input" type="radio" value="daily" /> Daily
                                    </label>{' '}
                                    <label className="form-label">
                                        <Field name="job_interval" component="input" type="radio" value="weekly" /> Weekly
                                    </label>{' '}
                                    <label className="form-label">
                                        <Field name="job_interval" component="input" type="radio" value="monthly" /> Monthly
                                    </label>{' '}
                                    <label className="form-label">
                                        <Field name="job_interval" component="input" type="radio" value="other" /> Other
                                    </label>
                                </div>                                
                                <div>
                                    <Field name="job_interval_details" component={renderInput} type="text" label="Enter details" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <label className="control-label supporting-label">Get notified by</label>
                                <div className="radio">
                                    <label className="form-label">
                                        <Field name="notification" component="input" type="checkbox" checked /> Email
                                    </label>
                                </div>
                                <div>
                                    <Field name="notification_email" component={renderInput} type="email" label="Enter E-mail address" />
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