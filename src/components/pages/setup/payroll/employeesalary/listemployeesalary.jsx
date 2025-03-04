import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import ImportedURL from '../../../../../common/api';
import { useNavigate } from 'react-router-dom'
import AgGridComponent from '../../../../molecules/aggrid/aggridcomponents';
import SpinnerComponent from '../../../../atoms/spinner';
import BreadCrumbs from '../../../../molecules/breadcrumbs';
import SwalDialog from '../../../../../utils/alert/swaldialog';
import { Success } from '../../../../../utils/alert/swal';
import '../../../../../assets/css/list.css';
import PageHeader from '../../../../atoms/pageheader';
import { employeesalarycolumnDefs, employeesalarydefaultColDef } from './componentconfig';
import { useEmployeesalary } from '../../../../../utils/context/employeesalarycontext';

const ListEmployeesalary = () => {
    const navigate = useNavigate();
    const gridApiRef = useRef(null);
    const spinner =  false;
    const { listEmployeesalary, getEmployeesalary, updateEmployeesalary } = useEmployeesalary();
    const rowData = listEmployeesalary|| [];

    const [perPage, setPerPage] = useState(25);
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState("");
    const [gridApi, setGridApi] = useState(null);
    const [listSpinner, setListSpinner] = useState(false);
    const [breadCrumbs] = useState({
        title: "Employee Salary",
        list: [
            { name: "Dashboard", to: "/", active: false },
            { name: "List Employeesalary", to: "/list-Employeesalary", active: true }
        ]
    });
    const [columnDefs] = useState(employeesalarycolumnDefs);

    const onFetchData = (query = {}) => {
        // const formData = {
        //     perPage: perPage,
        //     currentPage: currentPage,
        //     filter: filter,
        //     ...query
        // }
        // dispatch(spinnertax());
        getEmployeesalary();
    }

    useEffect(() => {
        onFetchData();
    }, []);

    const onGridReady = (params) => {
        setGridApi(params.api);
    };

    const onRowClicked = async (event) => {
        console.log(event.data,"data")
        const { _id, paymentstatus} = event.data;
        const value = event.event.target.getAttribute('data-action-type');
        console.log(value,"------event action----");
        if (value === 'View') {
            navigate(`/view-employeesalary/${_id}`);
        }
        if (value === 'Edit') {
            navigate(`/edit-employeesalary/${_id}`);
        }
        if (value === 'Status') {
            // const {paymentstatus} = event.data;

            SwalDialog({ title: "Are you sure you want to Change?", confirmButtonText: "Yes", cancelButtonText: "No" }).then((result) => {
                console.log(result,"Swal Result");
             console.log(event.data,"------alert-------")
                if (result.isConfirmed) {
                    // const {paymentstatus} =event.data;

                    const newStatus = paymentstatus === "paid" ? "due" : "paid";
                    console.log(newStatus,"newStatus");
                     const updatedData = { ...event.data, paymentstatus:newStatus}
                    // console.log(updatedData,"updatedData");
                    console.log(updatedData,"paymentstatus");


                    Success('Saved!');
                    setListSpinner(true);
                    axios.post(`${ImportedURL.API.updateEmployeesalary}/${_id}`, updatedData)
                        .then((res) => {
                            console.log("Update Response:", res.data);
                            const { message } = res.data ? res.data : {};
                            Success(message);
                            setListSpinner(false);
                            getEmployeesalary()
                            console.log("Updated listEmployeesalary:", listEmployeesalary); 
                        }).catch(({ response }) => {
                            const { message } = response.data ? response.data : {}
                            Error(message);
                            setListSpinner(false);
                        });
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
                                <PageHeader title='List Employeesalary' linkto='/add-employeesalary' action='Add' icon='bi bi-plus-lg' />
                                <AgGridComponent
                                    onRowClicked={onRowClicked}
                                    onGridReady={onGridReady}
                                    rowData={rowData}
                                    defaultColDef={employeesalarydefaultColDef}
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

export default ListEmployeesalary
