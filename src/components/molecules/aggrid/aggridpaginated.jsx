import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Pagination from '../../atoms/pagination';

const AgGridComponent = (props) => {

    const onclickPage = (page) => {
        const { perPage = 25, currentPage = 1 } = props;
        const totalPages = Math.ceil(props.total / perPage);
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            props.onPagination(page);
        }
    };

    const handlePerPageChange = (event) => {
        props.onPerPageChange(Number(event.target.value));
    };

    const { perPage = 25, currentPage = 1, defaultColDef, gridApiRef, columnDefs, rowData, total, onRowClicked, onGridReady, onFilterChanged } = props;
    const isEmptyRowData = rowData.length === 0;
    const totalPages = Math.ceil(total / perPage);

    return (
        <>
            <div className="table-responsive customize-pagination-ag-agrid">
                <div className="ag-theme-alpine">
                    <AgGridReact
                        rowHeight={50}
                        ref={gridApiRef}
                        paginationPageSize={perPage}
                        pagination={false}
                        rowData={rowData}
                        floatingFilter={true}
                        onRowClicked={(e) => onRowClicked(e)}
                        domLayout={"autoHeight"}
                        defaultColDef={defaultColDef}
                        onGridReady={(e) => onGridReady(e)}
                        columnDefs={columnDefs}
                        animateRows={true}
                        overlayNoRowsTemplate={"No rows to display"}
                        onFilterChanged={onFilterChanged}
                        suppressRowClickSelection={true}
                    />
                    <Pagination
                        perPage={perPage}
                        isEmptyRowData={isEmptyRowData}
                        currentPage={currentPage}
                        total={total}
                        totalPages={totalPages}
                        onclickPage={onclickPage}
                        handlePerPageChange={handlePerPageChange}
                    />
                </div>
            </div>
        </>
    );
};

export default AgGridComponent;