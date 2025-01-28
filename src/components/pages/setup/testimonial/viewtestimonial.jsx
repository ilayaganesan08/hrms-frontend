import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BreadCrumbs from '../../../molecules/breadcrumbs';
import SpinnerComponent from '../../../atoms/spinner';
import PageHeader from '../../../atoms/pageheader';
import { useTestimonial } from '../../../../utils/context/testimonialcontext';

const ViewTestimonial = () => {
    const { id } = useParams();
    const { testimonial, viewTestimonial } = useTestimonial();
    // const testimonialReducer = useSelector(state => state.testimonial);
    const data = testimonial || {};
    const spinner = false;

    const [breadCrumbs] = useState({
        title: "Testimonial",
        list: [
            { name: "Dashboard", to: "/", active: false },
            { name: "List Testimonial", to: "/list-testimonial", active: false },
            { name: "View Testimonial", to: "/view-testimonial", active: true },
        ]
    });

    useEffect(() => {
        if (id) {
            // dispatch(spinnerTestimonial());
            viewTestimonial(id);
        }
    }, []);

    return (
        <>
            <BreadCrumbs breadCrumbs={breadCrumbs} />
            <section className="section">
                <div className="card">
                    <div className="card-body">
                        <PageHeader title={"View FAQ"} linkto='/list-testimonial' action='Back' icon='ri-arrow-left-line' titleicon='bi bi-x-diamond-fill' />
                        <div className="row g-3">
                            <div className="col-lg-2"><span className='view-key'>Author</span></div>
                            <div className="col-lg-1"><span className='view-key'>:</span></div>
                            <div className="col-lg-9"><span className='view-value'>{data.author ? data.author : "---"}</span></div>

                            <div className="col-lg-2"><span className='view-key'>Role</span></div>
                            <div className="col-lg-1"><span className='view-key'>:</span></div>
                            <div className="col-lg-9"><span className='view-value'>{data.role ? data.role : "---"}</span></div>
                        </div>
                    </div>

                </div>
            </section >
            <SpinnerComponent spinner={spinner} />
        </>
    )
}

export default ViewTestimonial
