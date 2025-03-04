import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import ImportedURL from '../../../../../common/api';
import { useNavigate, useParams } from 'react-router-dom';
import { Success } from '../../../../../utils/alert/swal';
import SpinnerComponent from '../../../../atoms/spinner';
import BreadCrumbs from '../../../../molecules/breadcrumbs';
import FormFooter from '../../../../atoms/formfooter';
import PageHeader from '../../../../atoms/pageheader';
import { trimstrings } from '../../../../../utils/helperfunctions';
import { useEmployeesalary } from '../../../../../utils/context/employeesalarycontext';

const AddAndEditEmployeesalary = () => {
    const { id } = useParams();
    const { employeesalary, viewEmployeesalary, resetEmployeesalary, handleInptChangeEmployeesalary,getEmployeesalary } = useEmployeesalary();
    const navigate = useNavigate();
    const data = employeesalary || {};
    const spinner = false;

    const [modalType, setModalType] = useState("Add");
    const [errors, setError] = useState({});
    const [saveSpinner, setSaveSpinner] = useState(false);
    const [allowances, setAllowances] = useState([])
    const [deductions, setDeductions] = useState([])
    const inputRefs = useRef({
        employeesalaryidInputRef: null,
        employeesalaryInputRef: null,
        employeesalaryableamountInputRef: null,
        employeesalaryrateInputRef: null,
        // totalemployeesalaryInputRef: null,
        
    });

    const [breadCrumbs] = useState({
        title: "Employeesalary",
        list: [
            { name: "Dashboard", to: "/", active: false },
            { name: "List Employeesalary", to: "/list-Employeesalary", active: false },
            { name: `${id ? "Edit" : "Add"} Employeesalary`, to: "/edit-Employeesalary", active: true },
        ]
    });

    useEffect(() => {
        if (id) {
            setModalType("Edit");
            // dispatch(spinnerFaq());
            viewEmployeesalary(id);
        } else {
            resetEmployeesalary();
        }
    }, [id]);

    useEffect(() => {
        axios.get(`${ImportedURL.API.getPayrollItems}`)
            .then((res) => setAllowances(res.data))
            .catch((error) => console.error("Error fetching allowances:", error));
    }, []);  

    useEffect(() => {
        axios.get(`${ImportedURL.API.getPayrollItems}`)
            .then((res) => setDeductions(res.data))
            .catch((error) => console.error("Error fetching allowances:", error));
    }, []);  

    const onChange = (e) => {
        // const { name, value } = e.target;
        // handleInptChangeEmployeesalary(name, value);
        // setError({ ...errors, [name + "Error"]: false });
        const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
        handleInptChangeEmployeesalary("allowances", selectedOptions);
        setError({ ...errors, allowancesError: false });
    }

    const submit = () => {
        const newData = { ...data };
        trimstrings(newData)
        let valid = 1;
        let focusField = null;
        const checkerrors = {};
        const checkfields = ['employeeid', 'basicsalary', 'allowances', 'deductions', 'netsalary', 'effectivedate'];
        checkfields.forEach(item => {
            if (!newData[item]) {
                valid = 0;
                checkerrors[item + 'Error'] = true;
                if (!focusField) focusField = item;
            }
        })
        if (focusField) {
            inputRefs.current[`${focusField}InputRef`].focus();
        }
       
        setError(checkerrors)
        if (valid) {
            setSaveSpinner(true);
            Success('Saved successfully');
            navigate('/list-employeesalary');
            const url = id ? `${ImportedURL.API.updateemployeesalary}/${id}` : ImportedURL.API.addemployeesalary
            console.log(newData,"newData")
            axios.post(url, newData)
                .then((res) => {
                    console.log("edited",res.data)
                    const { message } = res.data || {};
                    Success(message);
                    setSaveSpinner(false);
                     getEmployeesalary();
                    navigate('/list-employeesalary');
                })
                .catch((error) => {
                    console.error('Submit error:', error); // Debug log
                    const message = error.response?.data?.message || "An error occurred";
                    Error(message);
                    setSaveSpinner(false);
                });
        }

        
    }


    return (
        <>
            <BreadCrumbs breadCrumbs={breadCrumbs} />
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <PageHeader title={modalType + " Employeesalary"} linkto='/list-Employeesalary' action='Back' icon='ri-arrow-left-line' titleicon='bi bi-x-diamond-fill' />
                                <form className="row g-3">
                                    <div className="col-6">
                                        <label className="form-label">Employee Id<span className="required-label">*</span></label>
                                        <input type="text" className={`form-control ${errors.employeeidError ? 'is-invalid' : ''}`} placeholder="Employee Id" name='employeeid' value={data.employeeid || ''} onChange={onChange}  />
                                        <div className="invalid-feedback" style={{ display: errors.employeeidError ? "block" : 'none' }}>Employee id is required</div>
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Basic Salary<span className="required-label">*</span></label>
                                        <input type="text" className={`form-control ${errors.basicsalaryError ? 'is-invalid' : ''}`} placeholder="Basic Salary" name='basicsalary' value={data.basicsalary || ''} onChange={onChange} ref={(el) => inputRefs.current.basicsalaryInputRef = el} />
                                        <div className="invalid-feedback" style={{ display: errors.employeesalarytypeError ? "block" : 'none' }}>Employeesalary Type is required</div>
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Allowances<span className="required-label">*</span></label>
                                        <select className={`form-control ${errors.allowancesError ? 'is-invalid' : ''}`} placeholder="Allowances" name='allowances' value={data.allowances || ''} onChange={onChange} ref={(el) => inputRefs.current.allowancesInputRef = el} >
                                    <option value="" disabled>Select Allowance</option>
                                        {allowances.map((allowance) => (
                                            <option key={allowance.id} value={allowance.id}>
                                                {allowance.name}
                                            </option>
                                        ))}

                                    </select>
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Deductions<span className="required-label">*</span></label>
                                        <select className={`form-control ${errors.deductionsError ? 'is-invalid' : ''}`} placeholder="Deductions" name='deductions' value={data.deductions || ''} onChange={onChange} ref={(el) => inputRefs.current.deductionsInputRef = el} >
                                    <option value="" disabled>Select Deductions</option>
                                        {allowances.map((deductions) => (
                                            <option key={deductions.id} value={deductions.id}>
                                                {deductions.name}
                                            </option>
                                        ))}
                                    </select>
                                    </div>
                                  
                                </form>
                            </div>
                            <FormFooter saveSpinner={saveSpinner} handleSubmit={submit} />
                        </div>
                    </div>
                </div>
            </section>
            <SpinnerComponent spinner={spinner} />
        </>
    );
};

export default AddAndEditEmployeesalary;
