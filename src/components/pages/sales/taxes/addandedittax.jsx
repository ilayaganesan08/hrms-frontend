import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import ImportedURL from '../../../../common/api';
import { useNavigate, useParams } from 'react-router-dom';
import { Success } from '../../../../utils/alert/swal';
import SpinnerComponent from '../../../atoms/spinner';
import BreadCrumbs from '../../../molecules/breadcrumbs';
import FormFooter from '../../../atoms/formfooter';
import PageHeader from '../../../atoms/pageheader';
import { trimstrings } from '../../../../utils/helperfunctions';
import { useTax } from '../../../../utils/context/taxcontext';

const AddAndEditTax = () => {
    const { id } = useParams();
    const { tax, viewTax, resetTax, handleInptChangeTax,getTax } = useTax();
    const navigate = useNavigate();
    // const faqReducer = useSelector(state => state.faq); // Update state selector
    const data = tax || {};
    const spinner = false;

    const [modalType, setModalType] = useState("Add");
    const [errors, setError] = useState({});
    const [saveSpinner, setSaveSpinner] = useState(false);
    const inputRefs = useRef({
        taxidInputRef: null,
        taxtypeInputRef: null,
        taxableamountInputRef: null,
        taxrateInputRef: null,
        // totaltaxInputRef: null,
        fillingdateInputRef: null,
        paymentstatusInputRef: null,
        
    });

    const [breadCrumbs] = useState({
        title: "Tax",
        list: [
            { name: "Dashboard", to: "/", active: false },
            { name: "List Tax", to: "/list-Tax", active: false },
            { name: `${id ? "Edit" : "Add"} Tax`, to: "/edit-Tax", active: true },
        ]
    });

    useEffect(() => {
        if (id) {
            setModalType("Edit");
            // dispatch(spinnerFaq());
            viewTax(id);
        } else {
            resetTax();
        }
    }, [id]);

    // useEffect(() =>{
    //     if (data.taxableamount && data.taxrate){
    //         const calTotalTax = (parseFloat(data.taxableamount) * parseFloat(data.taxrate)) /100;
    //         handleInptChangeTax('totaltax', calTotalTax.toFixed(2));
    //     }
    // },[data.taxableamount, data.taxrate]);

    const onChange = (e) => {
        const { name, value } = e.target;
        handleInptChangeTax(name, value);
        setError({ ...errors, [name + "Error"]: false });
    }

    const submit = () => {
        const newData = { ...data };
        trimstrings(newData)
        let valid = 1;
        let focusField = null;
        const checkerrors = {};
        const checkfields = ['taxid', 'taxtype', 'taxableamount', 'taxrate', 'fillingdate', 'paymentstatus'];
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
            navigate('/list-tax');
            const url = id ? `${ImportedURL.API.updatetax}/${id}` : ImportedURL.API.addtax
            console.log(newData,"newData")
            axios.post(url, newData)
                .then((res) => {
                    console.log("edited",res.data)
                    const { message } = res.data || {};
                    Success(message);
                    setSaveSpinner(false);
                     getTax();
                    navigate('/list-tax');
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
                                <PageHeader title={modalType + " Tax"} linkto='/list-Tax' action='Back' icon='ri-arrow-left-line' titleicon='bi bi-x-diamond-fill' />
                                <form className="row g-3">
                                    <div className="col-6">
                                        <label className="form-label">Tax Id<span className="required-label">*</span></label>
                                        <input type="text" className={`form-control ${errors.taxidError ? 'is-invalid' : ''}`} placeholder="Tax Id" name='taxid' value={data.taxid || ''} onChange={onChange}  />
                                        <div className="invalid-feedback" style={{ display: errors.taxidError ? "block" : 'none' }}>Tax id is required</div>
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Tax Type<span className="required-label">*</span></label>
                                        <input type="text" className={`form-control ${errors.taxtypeError ? 'is-invalid' : ''}`} placeholder="Tax Type" name='taxtype' value={data.taxtype || ''} onChange={onChange} ref={(el) => inputRefs.current.taxtypeInputRef = el} />
                                        <div className="invalid-feedback" style={{ display: errors.taxtypeError ? "block" : 'none' }}>Tax Type is required</div>
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Taxable Amount<span className="required-label">*</span></label>
                                        <input type="number" className={`form-control ${errors.taxableamountError ? 'is-invalid' : ''}`} placeholder="Taxable Amount" name='taxableamount' value={data.taxableamount || ''} onChange={onChange} ref={(el) => inputRefs.current.taxableamountInputRef = el} />
                                        <div className="invalid-feedback" style={{ display: errors.taxableamountError ? "block" : 'none' }}>Taxable Amount is required</div>
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Tax Rate<span className="required-label">*</span></label>
                                        <input type="number" className={`form-control ${errors.taxrateError ? 'is-invalid' : ''}`} placeholder="Tax Rate" name='taxrate' value={data.taxrate || ''} onChange={onChange} ref={(el) => inputRefs.current.taxrateInputRef = el} />
                                        <div className="invalid-feedback" style={{ display: errors.taxrateError ? "block" : 'none' }}>Tax Rate Amount is required</div>
                                    </div>
                                   {/* <div className="col-6">
                                        <label className="form-label">Total Tax<span className="required-label">*</span></label>
                                        <input type="number" className="form-control" placeholder="Total Tax" name='totaltax' value={data.totaltax || ''} onChange={onChange} ref={(el) => inputRefs.current.totaltaxInputRef = el} />
                                         <div className="invalid-feedback" style={{ display: errors.totaltaxError ? "block" : 'none' }}>Total Tax is required</div>
                                    </div>*/}
                                    <div className="col-6">
                                        <label className="form-label">Filling Date<span className="required-label">*</span></label>
                                        <input type="date" className={`form-control ${errors.fillingdateError ? 'is-invalid' : ''}`} placeholder="Filling Date" name='fillingdate' value={data.fillingdate || ''} onChange={onChange} ref={(el) => inputRefs.current.fillingdateInputRef = el} />
                                        <div className="invalid-feedback" style={{ display: errors.fillingdateError ? "block" : 'none' }}>Filling Date is required</div>
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Status<span className="required-label">*</span></label>
                                        <select className={`form-control ${errors.paymentstatusError ? 'is-invalid' : ''}`} placeholder="Status" name='paymentstatus' value={data.paymentstatus || ''} onChange={onChange} ref={(el) => inputRefs.current.paymentstatusInputRef = el} >
                                            <option value="" disabled>Select Status</option>
                                            <option value="paid">Paid</option>
                                            <option value="due">Due</option>
                                        </select>
                                        <div className="invalid-feedback" style={{ display: errors.paymentstatusError ? "block" : 'none' }}>status is required</div>
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

export default AddAndEditTax;
