import React from 'react';

const CompanyAddButton = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <button className="btn btn-warning pull-right" style={{"marginBottom": "18px"}} data-toggle="modal" data-target="#editCompany" data-backdrop="static"><i className="fa fa-plus"></i> Add Company</button>
            </div>
        </div>
    )
}

export default CompanyAddButton;