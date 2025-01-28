import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Success } from '../../../../utils/alert/swal';
import SpinnerComponent from '../../../atoms/spinner';
import BreadCrumbs from '../../../molecules/breadcrumbs';
import FormFooter from '../../../atoms/formfooter';
import PageHeader from '../../../atoms/pageheader';
import { trimstrings } from '../../../../utils/helperfunctions';
import { useTestimonial } from '../../../../utils/context/testimonialcontext';
import ImportedURL from '../../../../common/api';
import axios from 'axios';

const AddAndEditFAQ = () => {
    const { id } = useParams();
    const { testimonial, viewTestimonial, resetTestimonial, handleInptChangeTestimonial } = useTestimonial();
    const navigate = useNavigate();
    // const testimonialReducer = useSelector(state => state.testimonial); // Update state selector
    const data = testimonial || {};
    const spinner = false;
    const [modalType, setModalType] = useState("Add");
    const [errors, setError] = useState({});
    const [saveSpinner, setSaveSpinner] = useState(false);
    const [breadCrumbs] = useState({
        title: "Testimonial",
        list: [
            { name: "Dashboard", to: "/", active: false },
            { name: "List Testimonial", to: "/list-testimonial", active: false },
            { name: `${id ? "Edit" : "Add"} Testimonial`, to: "/edit-testimonial", active: true },
        ]
    });

    useEffect(() => {
        if (id) {
            setModalType("Edit");
            // dispatch(spinnerTestimonial());
            viewTestimonial(id);
        } else {
            resetTestimonial();
        }
    }, [id]);

    const onChange = (e) => {
        const { name, value } = e.target;

        if (name === 'profile') {
            console.log("========>", e.target.files[0]);
            handleInptChangeTestimonial(name, e.target.files[0]);
        } else
            handleInptChangeTestimonial(name, value);
        setError({ ...errors, [name + "Error"]: false });
    }

    const submit = () => {
        const newData = { ...data };
        trimstrings(newData)
        let valid = 1;
        const checkerrors = {};

        if (!newData['author']) {
            valid = 0;
            checkerrors['authorError'] = true;
        }

        setError(checkerrors)

        const formdata = new FormData();
        for (let item in newData) {
            formdata.append(item, newData[item])
        }

        if (valid) {
            setSaveSpinner(true);
            Success('Saved successfully');

            axios.post(ImportedURL.ROOTURL + 'testimonial/' + (id ? `updatetestimonial/${id}` : 'addtestimonial'), formdata)
                .then((res) => {
                    const { message } = res.data || {};
                    Success(message);
                    setSaveSpinner(false);
                    navigate('/list-testimonial');
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
                                <PageHeader title={modalType + " Testimonial"} linkto='/list-testimonial' action='Back' icon='ri-arrow-left-line' titleicon='bi bi-x-diamond-fill' />
                                <form className="row g-3">
                                    <div className="col-6">
                                        <label className="form-label">Author<span className="required-label">*</span></label>
                                        <input type="text" className={`form-control ${errors.authorError ? 'is-invalid' : ''}`} placeholder="Author" name='author' value={data.author || ''} onChange={onChange} />
                                        <div className="invalid-feedback" style={{ display: errors.authorError ? "block" : 'none' }}>Author is required</div>
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Role</label>
                                        <select type="text" className={`form-control ${errors.answerError ? 'is-invalid' : ''}`} placeholder="Answer" name='role' value={data.role || ''} onChange={onChange} >
                                            <option value=''>Select</option>
                                            <option value='HR Mananger'>HR Manager</option>
                                            <option value='Mananger'> Manager</option>
                                            <option value='employee'> Employee</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Content</label>
                                        <textarea type="text" className={`form-control ${errors.answerError ? 'is-invalid' : ''}`} placeholder="Content" name='content' value={data.content || ''} onChange={onChange} />
                                    </div>
                                    <div className="col-6">
                                        <label for="inputNumber" class="form-label">File Upload</label>
                                        <input class="form-control" type="file" id="formFile" name={'profile'} onChange={onChange} />
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

export default AddAndEditFAQ;
