import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BreadCrumbs from '../../../molecules/breadcrumbs';
import SpinnerComponent from '../../../atoms/spinner';
import PageHeader from '../../../atoms/pageheader';
import { useFaq } from '../../../../utils/context/faqcontext';

const ViewFaq = () => {
    const { id } = useParams();
    const { faq, viewFaq } = useFaq();
    // const faqReducer = useSelector(state => state.faq);
    const data = faq || {};
    const spinner = false;

    const [breadCrumbs] = useState({
        title: "Faq",
        list: [
            { name: "Dashboard", to: "/", active: false },
            { name: "List Faq", to: "/list-faq", active: false },
            { name: "View Faq", to: "/view-faq", active: true },
        ]
    });

    useEffect(() => {
        if (id) {
            // dispatch(spinnerFaq());
            viewFaq(id);
        }
    }, []);

    return (
        <>
            <BreadCrumbs breadCrumbs={breadCrumbs} />
            <section className="section">
                <div className="card">
                    <div className="card-body">
                        <PageHeader title={"View FAQ"} linkto='/list-faq' action='Back' icon='ri-arrow-left-line' titleicon='bi bi-x-diamond-fill' />
                        <div className="row g-3">
                            <div className="col-lg-2"><span className='view-key'>Question</span></div>
                            <div className="col-lg-1"><span className='view-key'>:</span></div>
                            <div className="col-lg-9"><span className='view-value'>{data.question ? data.question : "---"}</span></div>

                            <div className="col-lg-2"><span className='view-key'>Answer</span></div>
                            <div className="col-lg-1"><span className='view-key'>:</span></div>
                            <div className="col-lg-9"><span className='view-value'>{data.answer ? data.answer : "---"}</span></div>
                        </div>
                    </div>

                </div>
            </section >
            <SpinnerComponent spinner={spinner} />
        </>
    )
}

export default ViewFaq
