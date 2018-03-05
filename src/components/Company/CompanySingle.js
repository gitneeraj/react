import React from 'react';
import { Link } from 'react-router-dom';

const CompanySingle = ({companies, loading, handleEdit}) => {

    return (companies).map((company, index) => {
        return (<tr key={index}>
            <td>{index + 1}.</td>
            <td>{company.company_name}</td>
            <td>{company.website}</td>
            <td>{(company.active) ? 'Active' : 'Inactive'}</td>
            <td>{company.created_at}</td>
            <td>
                {
                    (company.active)?
                    <Link to={`/company/${company.id}/users`} className="btn bg-maroon btn-flat"><i className="fa fa-users"></i> Users</Link>
                    :
                    <button className="btn bg-maroon btn-flat" disabled><i className="fa fa-users"></i> Users</button>
                }                
                <button className="btn bg-purple btn-flat"><i className="fa fa-briefcase"></i> Manage Jobs</button>
                <button data-toggle="modal" data-target="#editCompany" disabled={loading} className="btn bg-orange btn-flat" onClick={() => handleEdit(company.id)}>
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

export default CompanySingle;