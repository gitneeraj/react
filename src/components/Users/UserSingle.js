import React from 'react';
// import { Link } from 'react-router-dom';

const UserSingle = ({users, loading, handleEdit}) => {

    return (users).map((user, index) => {
        return (<tr key={index}>
            <td>{index + 1}.</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.role}</td>
            <td>{(user.active) ? 'Active' : 'Inactive'}</td>
            <td>{user.created_at}</td>
            <td>
                <button data-toggle="modal" data-target="#editUser" disabled={loading} className="btn bg-orange btn-flat" onClick={() => handleEdit(user.id)}>
                    {(loading) ?
                        <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i> :
                        <i className="fa fa-pencil"></i>
                    }
                    &nbsp;Edit
                </button>
            </td>
        </tr>)
    });
}

export default UserSingle;