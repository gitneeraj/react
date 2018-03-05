import React from 'react';

const UserAddButton = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <button className="btn btn-warning pull-right" style={{"marginBottom": "18px"}} data-toggle="modal" data-target="#editUser" data-backdrop="static"><i className="fa fa-plus"></i> Add User</button>
            </div>
        </div>
    )
}

export default UserAddButton;