import React from 'react';

const SpinnerComponent = ({ spinner }) => {
    return (
        <>
            {spinner ?
                <>
                    <div className="spinner-overlay"></div>
                    <div className='spinner-container'>
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </>
                : ""}
        </>
    );
}

export default SpinnerComponent;
