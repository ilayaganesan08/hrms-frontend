import { editIcon, viewIcon } from "../../../../utils/ui";

export const faqdefaultColDef = {
    editable: false,
    sortable: true,
    resizable: true,
    filter: true,
    flex: 1,
    minWidth: 100,
}

export const faqcolumnDefs = [
    {
        headerName: "Question", field: "question", sortable: false, floatingFilter: true,
        valueGetter: function (params) {
            return params.data ? params.data.question : '---';
        }
    },
    {
        headerName: "Answer", field: "answer", sortable: false, floatingFilter: true,
        valueGetter: function (params) {
            return params.data ? params.data.answer : '---';
        }
    },

    {
        headerName: "Status", field: "status", sortable: false, filter: false,
        cellRenderer: function (params) {
            if (params.data && params.data.isactive) {
                return <div className='text-center'><button type="button" class="btn btn-success btn-sm" data-action-type="Status">Active</button></div>;
            } else {
                return <div className='text-center'><button type="button" class="btn btn-danger btn-sm" data-action-type="Status">Inactive</button></div>;
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