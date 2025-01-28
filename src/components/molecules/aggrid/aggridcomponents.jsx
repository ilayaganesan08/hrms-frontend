import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const AgGridComponent = (props) => {
    const { defaultColDef, gridApiRef, columnDefs, rowData, onRowClicked, onGridReady } = props;
    return (
        <>
            <div className="table-responsive customize-pagination-ag-agrid">
                <div className="ag-theme-alpine">
                    <AgGridReact
                        rowHeight={50}
                        ref={gridApiRef}
                        paginationPageSize={20}
                        pagination={true}
                        rowData={rowData}
                        floatingFilter={true}
                        onRowClicked={(e) => onRowClicked(e)}
                        domLayout={"autoHeight"}
                        defaultColDef={defaultColDef}
                        onGridReady={(e) => onGridReady(e)}
                        columnDefs={columnDefs}
                        animateRows={true}
                        overlayNoRowsTemplate={"No rows to display"}
                        suppressRowClickSelection={true}
                    />
                </div>
            </div>
        </>
    );
};

export default AgGridComponent;