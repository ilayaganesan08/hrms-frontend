

import React from 'react';

const FormFooter = ({ handleSubmit, saveSpinner }) => {
    return (
        <>
            <div className="card-footer form-footer">
                <label className="form-label"><span className="mandatory-field">*</span>Mandatory Fields</label>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                    <i className={`${saveSpinner ? "spinner-border spinner-border-sm" : "bx bx-save"} icon-margin-right`} aria-hidden="true"></i>
                    {saveSpinner ? "Saving" : "Save"}
                </button>
            </div>
        </>
    );
}

export default FormFooter;



