import React from 'react';

const renderTextArea = ({
    input,
    label,
    isRequired,
    meta: { touched, error, warning }
  }) => (
    <div className="form-group">
        { label &&
            <label className="control-label">{label}
                {isRequired === "true" && <span className="text-danger">*</span>}
            </label>
        }
        <textarea {...input} placeholder={label} className="form-control"></textarea>
        {touched &&
          ((error && <span className="alert alert-danger">{error}</span>) ||
            (warning && <span className="alert alert-warn">{warning}</span>))}
    </div>
  )

  export default renderTextArea;