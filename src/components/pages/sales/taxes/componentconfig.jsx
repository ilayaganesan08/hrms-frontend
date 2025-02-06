import { editIcon, viewIcon } from "../../../../utils/ui";

export const taxdefaultColDef = {
    editable: false,
    sortable: true,
    resizable: true,
    filter: true,
    flex: 1,
    minWidth: 100,
}

export const taxcolumnDefs = [
    {
        headerName: "Tax Id", field: "taxid", sortable: false, floatingFilter: true,
        valueGetter: function (params) {
            return params.data ? params.data.taxid : '---';
        }
    },
    {
        headerName: "Tax Type", field: "taxtype", sortable: false, floatingFilter: true,
        valueGetter: function (params) {
            return params.data ? params.data.taxtype : '---';
        }
    },
    {
        headerName: "Taxable Amount", field: "taxableamount", sortable: false, floatingFilter: true,
        valueGetter: function (params) {
            return params.data ? params.data.taxableamount : '---';
        }
    },
    {
        headerName: "Tax Rate", field: "taxrate", sortable: false, floatingFilter: true,
        valueGetter: function (params) {
            return params.data ? params.data.taxrate : '---';
        }
    },
    {
        headerName: "Total Tax", field: "totaltax", sortable: false, floatingFilter: true,
        valueGetter: function (params) {
            return params.data ? params.data.totaltax : '---';
        }
    },
    {
        headerName: "Filling Date", field: "fillingdate", sortable: false, floatingFilter: true,
        valueGetter: function (params) {
            return params.data ? params.data.fillingdate : '---';
        }
    },
   

    {
        headerName: "Status", field: "status", sortable: false, filter: false,
        cellRenderer: function (params) {
            console.log(params,"from config")
            if (params.data && params.data.paymentstatus=== "paid") {
                return <div className='text-center'><button type="button" class="btn btn-success btn-sm" data-action-type="Status">Paid</button></div>;
            } else {
                return <div className='text-center'><button type="button" class="btn btn-danger btn-sm" data-action-type="Status">Due</button></div>;
            }
        }
    },
    {
        headerName: 'Actions', field: 'actions', suppressMenu: true, sortable: false, filter: false,
        cellRenderer: function (params) {
            return <div dangerouslySetInnerHTML={{ __html: viewIcon + editIcon }}></div>;
        }
    },
]