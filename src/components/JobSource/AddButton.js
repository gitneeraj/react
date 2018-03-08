import React from 'react';

export const AddButton = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <button className="btn btn-warning pull-right" style={{"marginBottom": "18px"}} data-toggle="modal" data-target="#newScrapeRequestModal" data-backdrop="static"><i className="fa fa-plus"></i> New Scrape Request</button>
            </div>
        </div>
    )
}