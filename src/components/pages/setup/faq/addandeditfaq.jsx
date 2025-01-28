import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Success } from '../../../../utils/alert/swal';
import SpinnerComponent from '../../../atoms/spinner';
import BreadCrumbs from '../../../molecules/breadcrumbs';
import FormFooter from '../../../atoms/formfooter';
import PageHeader from '../../../atoms/pageheader';
import { trimstrings } from '../../../../utils/helperfunctions';
import { useFaq } from '../../../../utils/context/faqcontext';

const AddAndEditFAQ = () => {
    const { id } = useParams();
    const { faq, viewFaq, resetFaq, handleInptChangeFaq } = useFaq();
    const navigate = useNavigate();
    // const faqReducer = useSelector(state => state.faq); // Update state selector
    const data = faq || {};
    const spinner = false;

    const [modalType, setModalType] = useState("Add");
    const [errors, setError] = useState({});
    const [saveSpinner, setSaveSpinner] = useState(false);
    const inputRefs = useRef({
        questionInputRef: null,
        answerInputRef: null,
        // other input refs
    });

    const [breadCrumbs] = useState({
        title: "FAQ",
        list: [
            { name: "Dashboard", to: "/", active: false },
            { name: "List Faq", to: "/list-faq", active: false },
            { name: `${id ? "Edit" : "Add"} Faq`, to: "/edit-faq", active: true },
        ]
    });

    useEffect(() => {
        if (id) {
            setModalType("Edit");
            // dispatch(spinnerFaq());
            viewFaq(id);
        } else {
            resetFaq();
        }
    }, [id]);

    const onChange = (e) => {
        const { name, value } = e.target;
        handleInptChangeFaq(name, value);
        setError({ ...errors, [name + "Error"]: false });
    }

    const submit = () => {
        const newData = { ...data };
        trimstrings(newData)
        let valid = 1;
        let focusField = null;
        const checkerrors = {};
        const checkfields = ['question', 'answer'];
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
            navigate('/list-faq');
            // axios.post(apiUrl, newData)
            //     .then((res) => {
            //         const { message } = res.data || {};
            //         Success(message);
            //         setSaveSpinner(false);
            //         navigate('/list-faq');
            //     })
            //     .catch((error) => {
            //         console.error('Submit error:', error); // Debug log
            //         const message = error.response?.data?.message || "An error occurred";
            //         Error(message);
            //         setSaveSpinner(false);
            //     });
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
                                <PageHeader title={modalType + " FAQ"} linkto='/list-faq' action='Back' icon='ri-arrow-left-line' titleicon='bi bi-x-diamond-fill' />
                                <form className="row g-3">
                                    <div className="col-6">
                                        <label className="form-label">Question<span className="required-label">*</span></label>
                                        <input type="text" className={`form-control ${errors.questionError ? 'is-invalid' : ''}`} placeholder="Question" name='question' value={data.question || ''} onChange={onChange} ref={(el) => inputRefs.current.questionInputRef = el} />
                                        <div className="invalid-feedback" style={{ display: errors.questionError ? "block" : 'none' }}>Question is required</div>
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Answer<span className="required-label">*</span></label>
                                        <input type="text" className={`form-control ${errors.answerError ? 'is-invalid' : ''}`} placeholder="Answer" name='answer' value={data.answer || ''} onChange={onChange} ref={(el) => inputRefs.current.answerInputRef = el} />
                                        <div className="invalid-feedback" style={{ display: errors.answerError ? "block" : 'none' }}>Answer is required</div>
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
