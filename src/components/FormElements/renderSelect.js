import React from 'react';

const renderSelect = ({
    input,
    label,
    isRequired,
    meta: { touched, error, warning },
    children
}) => (
    <div>
        <label className="control-label">{label}
            {isRequired === "true" && <span className="text-danger">*</span>}
        </label>
        <select {...input} className="form-control">
            {children}
        </select>
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </div>
);

export default renderSelect;