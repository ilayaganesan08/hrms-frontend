import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, linkto, icon, action, titleicon }) => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <div className='header-icon'>
                    <h5 className="card-title"><i className={titleicon}></i>{title}</h5>
                </div>
                <div className="ms-auto d-flex align-items-center">
                    <Link to={linkto}>
                        <button type="button" className="btn btn-primary ">
                            <i className={`${icon} icon-margin-right`} aria-hidden="true"></i> {action}
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default PageHeader;
