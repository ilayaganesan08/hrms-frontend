import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

class AgGridDragAndDropComponent extends Component {
    render() {
        const { gridApiRef, rowData, defaultColDef, columnDefs, onRowClicked, onGridReady, onRowDragEnd } = this.props;
        return (
            <>
                <div className="table-responsive">
                    <div className="ag-theme-alpine">
                        <AgGridReact
                            rowHeight={50}
                            ref={gridApiRef}
                            pagination={false}
                            rowData={rowData}
                            onRowClicked={(e) => onRowClicked(e)}
                            domLayout={"autoHeight"}
                            defaultColDef={defaultColDef}
                            onGridReady={(e) => onGridReady(e)}
                            columnDefs={columnDefs}
                            onRowDragEnd={(e) => onRowDragEnd(e)}
                            rowDragManaged={true}
                            suppressMoveWhenRowDragging={true}
                        >
                        </AgGridReact>
                    </div>
                </div>
            </>
        )
    }
}
export default AgGridDragAndDropComponent