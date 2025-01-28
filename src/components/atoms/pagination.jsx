import React from 'react'

const Pagination = ({ perPage, handlePerPageChange, isEmptyRowData, currentPage, total, totalPages, onclickPage }) => {
    return (
        <>
            <div className="pagination-row">
                <div className="pagination-page-size-panel">
                    <label >Page Size:</label>
                    <select id="perPage" value={perPage} onChange={handlePerPageChange}>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                </div>
                <div className="pagination-row-summary-panel">
                    <span className='pagination-row-summary-value'>{isEmptyRowData ? 0 : (((currentPage - 1) * perPage) + 1)}</span>
                    <span className='pagination-row-summary-label'>to</span>
                    <span className='pagination-row-summary-value'>{Math.min(currentPage * perPage, total)}</span>
                    <span className='pagination-row-summary-label'>of</span>
                    <span className='pagination-row-summary-value'>{total}</span>
                </div>
                <div className="pagination-page-summary-panel">
                    <span className='pagination-page-summary-icon' onClick={() => onclickPage(1)}><i class="ag-icon ag-icon-first" /></span>
                    <span className='pagination-page-summary-icon' onClick={() => onclickPage(Math.max(currentPage - 1, 1))}><i class="ag-icon ag-icon-previous" /></span>
                    <span className='pagination-page-description'>
                        <span className='pagination-page-of-label'>Page</span>
                        <span className='pagination-page-of-value'>{isEmptyRowData ? 0 : currentPage}</span>
                        <span className='pagination-page-of-label'>of</span>
                        <span className='pagination-page-of-value'>{totalPages}</span>
                    </span>
                    <span className='pagination-page-summary-icon' onClick={() => onclickPage(Math.min(currentPage + 1, totalPages))}><i class="ag-icon ag-icon-next" /></span>
                    <span className='pagination-page-summary-icon' onClick={() => onclickPage(totalPages)}><i class="ag-icon ag-icon-last" /></span>
                </div>

            </div>
        </>
    )
}

export default Pagination