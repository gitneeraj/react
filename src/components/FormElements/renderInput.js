import React from 'react';

const renderInput = ({
    input,
    label,
    type,
    isRequired,
    meta: { touched, error, warning }
  }) => (
    <div className="form-group">
        { label &&
            <label className="control-label">{label}
                {isRequired === "true" && <span className="text-danger">*</span>}
            </label>
        }
        <input {...input} placeholder={label} type={type} className="form-control" />
        {touched &&
          ((error && <span className="alert alert-danger">{error}</span>) ||
            (warning && <span className="alert alert-warn">{warning}</span>))}
    </div>
  )

  export default renderInput;