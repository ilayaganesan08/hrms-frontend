import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AgGridComponent from '../../../molecules/aggrid/aggridcomponents';
import SpinnerComponent from '../../../atoms/spinner';
import BreadCrumbs from '../../../molecules/breadcrumbs';
import SwalDialog from '../../../../utils/alert/swaldialog';
import { Success } from '../../../../utils/alert/swal';
import '../../../../assets/css/list.css';
import PageHeader from '../../../atoms/pageheader';
import { faqcolumnDefs, faqdefaultColDef } from './componentconfig';
import { useFaq } from '../../../../utils/context/faqcontext';

const ListFaq = () => {
    const navigate = useNavigate();
    const gridApiRef = useRef(null);
    const spinner =  false;
    const { listFaq, getFaq } = useFaq();
    const rowData = listFaq || [];

    const [perPage, setPerPage] = useState(25);
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState("");
    const [gridApi, setGridApi] = useState(null);
    const [listSpinner, setListSpinner] = useState(false);
    const [breadCrumbs] = useState({
        title: "Faq",
        list: [
            { name: "Dashboard", to: "/", active: false },
            { name: "List Faq", to: "/list-faq", active: true }
        ]
    });
    const [columnDefs] = useState(faqcolumnDefs);

    const onFetchData = (query = {}) => {
        const formData = {
            perPage: perPage,
            currentPage: currentPage,
            filter: filter,
            ...query
        }
        // dispatch(spinnerFaq());
        getFaq(formData);
    }

    useEffect(() => {
        onFetchData();
    }, []);

    const onGridReady = (params) => {
        setGridApi(params.api);
    };

    const onRowClicked = async (event) => {
        const { _id } = event.data;
        const value = event.event.target.getAttribute('data-action-type');
        if (value === 'View') {
            navigate('/view-faq/' + _id);
        }
        if (value === 'Edit') {
            navigate('/edit-faq/' + _id);
        }
        if (value === 'Status') {
            SwalDialog({ title: "Are you sure you want to Change?", confirmButtonText: "Yes", cancelButtonText: "No" }).then((result) => {
                if (result.isConfirmed) {
                    Success('Saved!');
                    // setListSpinner(true);
                    // axios.post(ImportedURL.API.statuschange, { id: _id, isactive: !isactive, model: "faqs" })
                    //     .then((res) => {
                    //         const { message } = res.data ? res.data : {};
                    //         Success(message);
                    //         setListSpinner(false);
                    //         onFetchData();
                    //     }).catch(({ response }) => {
                    //         const { message } = response.data ? response.data : {}
                    //         Error(message);
                    //         setListSpinner(false);
                    //     });
                }
            });
        }
    };

    return (
        <>
            <BreadCrumbs breadCrumbs={breadCrumbs} />
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="card">
                            <div className="card-body">
                                <PageHeader title='List Faq' linkto='/add-faq' action='Add' icon='bi bi-plus-lg' />
                                <AgGridComponent
                                    onRowClicked={onRowClicked}
                                    onGridReady={onGridReady}
                                    rowData={rowData}
                                    defaultColDef={faqdefaultColDef}
                                    columnDefs={columnDefs}
                                    gridApiRef={gridApiRef}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SpinnerComponent spinner={spinner || listSpinner} />

        </>
    )
}

export default ListFaq
