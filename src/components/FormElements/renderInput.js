import React from 'react';

const renderInput = ({
    input,
    label,
    type,
    isRequired,
    meta: { touched, error, warning }
  }) => (
    <div>
        { label &&
            <label className="control-label">{label}
                {isRequired === "true" && <span className="text-danger">*</span>}
            </label>
        }
        <input {...input} placeholder={label} type={type} className="form-control" />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </div>
  )

  export default renderInput;