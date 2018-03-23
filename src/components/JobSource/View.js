import React from 'react';
import PropTypes from 'prop-types';

export const View = ({view, resetForm}) => {
    
    return (
        <div id="viewJobSourceModal" className="modal fade" role="dialog">
            <div className="modal-dialog">

                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" id="close-modal" className="close" data-dismiss="modal" onClick={resetForm}>&times;</button>
                        <h4 className="modal-title">View Job Source - {view && view.name }</h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="control-label">Job Name</label><br/>
                                <p>{ view.name }</p>
                            </div>
                            <div className="col-lg-6">
                            <label className="control-label">Website URL</label><br/>
                                <p>{ view.name }</p>
                            </div>
                            <div className="col-lg-12">
                                <label className="control-label">Details of content to be fetched</label><br/>
                                <p>{ view.fetcher_details }</p>
                            </div>
                            <div className="col-lg-12">
                                <label className="control-label">Input Criteria</label><br/>
                                <p>{ view.input_criteria }</p>
                            </div>
                            <div className="col-lg-6">
                                <label className="control-label">How do you want the content to be delivered?</label><br/>
                                <p>{ view.deliver_format }</p>
                            </div>
                            <div className="col-lg-6">
                                <label className="control-label">How often do you want to scrape?</label><br/>
                                <p>{ view.job_interval }</p>
                                {
                                    view.job_interval === 'other' && 
                                    <span>({view.job_interval_details})</span>
                                }
                            </div>
                            <div className="col-lg-12">
                                <label className="control-label">Get notified by</label><br/>
                                <p>{ view.notification } : { view.notification_email }</p>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={resetForm}>Close</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

View.propTypes = {
    view: PropTypes.object.isRequired,
    resetForm: PropTypes.func.isRequired
};