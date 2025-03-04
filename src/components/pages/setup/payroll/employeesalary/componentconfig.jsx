import { editIcon, viewIcon } from "../../../../../utils/ui";

export const employeesalarydefaultColDef = {
    editable: false,
    sortable: true,
    resizable: true,
    filter: true,
    flex: 1,
    minWidth: 100,
}

export const employeesalarycolumnDefs = [
    {
        headerName: "Employee id", field: "employeeid", sortable: false, floatingFilter: true,
        valueGetter: function (params) {
            return params.data ? params.data.employeeid : '---';
        }
    },
    {
        headerName: "Basic Salary", field: "basicsalary", sortable: false, floatingFilter: true,
        valueGetter: function (params) {
            return params.data ? params.data.basicsalary : '---';
        }
    },
    {
        headerName: "Allowances", field: "allowances", sortable: false, floatingFilter: true,
        valueGetter: function (params) {
            return params.data ? params.data.allowances : '---';
        }
    },
    {
        headerName: "Deductions", field: "deductions", sortable: false, floatingFilter: true,
        valueGetter: function (params) {
            return params.data ? params.data.deductions : '---';
        }
    },
    {
        headerName: "NetSalary", field: "netsalary", sortable: false, floatingFilter: true,
        valueGetter: function (params) {
            return params.data ? params.data.netSalary : '---';
        }
    },
    {
        headerName: "Effective Date", field: "effectivedate", sortable: false, floatingFilter: true,
        valueGetter: function (params) {
            return params.data ? params.data.effectivedate : '---';
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