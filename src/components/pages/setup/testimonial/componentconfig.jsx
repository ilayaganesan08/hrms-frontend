import ImportedURL from "../../../../common/api";
import { editIcon, viewIcon } from "../../../../utils/ui";

export const testimonialdefaultColDef = {
    editable: false,
    sortable: true,
    resizable: true,
    filter: true,
    flex: 1,
    minWidth: 100,
}

export const testimonialcolumnDefs = [
    {
        headerName: "Profile", field: "profile", sortable: false, floatingFilter: false,
        cellRenderer: ((param) => {
            return param.value ? <img src={ImportedURL.FILEURL + param.value} width={50} height={50}></img> : '---'
        })

    },
    {
        headerName: "Author", field: "author", sortable: false, floatingFilter: true,

    },
    {
        headerName: "Role", field: "role", sortable: false, floatingFilter: true,
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