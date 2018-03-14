import React from 'react';

export const renderSelect = ({
    input,
    label,
    isRequired,
    meta: { touched, error, warning },
    children
}) => (
    <div className="form-group">
        { label &&
            <label className="control-label">{label}
                {isRequired === "true" && <span className="text-danger">*</span>}
            </label>
        }
        <select {...input} className="form-control">
            {children}
        </select>
        {touched &&
          ((error && <span className="alert alert-danger">{error}</span>) ||
            (warning && <span className="alert alert-warn">{warning}</span>))}
    </div>
);