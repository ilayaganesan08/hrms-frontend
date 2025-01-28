import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BreadCrumbs from '../../../molecules/breadcrumbs';
import SpinnerComponent from '../../../atoms/spinner';
import PageHeader from '../../../atoms/pageheader';
import { useTax } from '../../../../utils/context/taxcontext';

const ViewTax = () => {
    const { id } = useParams();
    const { tax, viewTax } = useTax();
    // const testimonialReducer = useSelector(state => state.testimonial);
    const data = tax || {};
    const spinner = false;

    const [breadCrumbs] = useState({
        title: "Tax",
        list: [
            { name: "Dashboard", to: "/", active: false },
            { name: "List Tax", to: "/list-tax", active: false },
            { name: "View Tax", to: "/view-tax", active: true },
        ]
    });

    useEffect(() => {
        if (id) {
            // dispatch(spinnerTestimonial());
            viewTax(id);
            console.log(tax); // Verify the structure of the data

        }
    }, []);

    return (
        <>
            <BreadCrumbs breadCrumbs={breadCrumbs} />
            <section className="section">
                <div className="card">
                    <div className="card-body">
                        <PageHeader title={"View Tax"} linkto='/list-tax' action='Back' icon='ri-arrow-left-line' titleicon='bi bi-x-diamond-fill' />
                        <div className="row g-3">
                            <div className="col-lg-2"><span className='view-key'>Tax Id</span></div>
                            <div className="col-lg-1"><span className='view-key'>:</span></div>
                            <div className="col-lg-9"><span className='view-value'>{data.taxid ? data.taxid : "---"}</span></div>

                            <div className="col-lg-2"><span className='view-key'>Tax Type</span></div>
                            <div className="col-lg-1"><span className='view-key'>:</span></div>
                            <div className="col-lg-9"><span className='view-value'>{data.taxtype ? data.taxtype : "---"}</span></div>

                            <div className="col-lg-2"><span className='view-key'>Taxable Amount</span></div>
                            <div className="col-lg-1"><span className='view-key'>:</span></div>
                            <div className="col-lg-9"><span className='view-value'>{data.taxableamount ? data.taxableamount : "---"}</span></div>

                            <div className="col-lg-2"><span className='view-key'>Tax Rate</span></div>
                            <div className="col-lg-1"><span className='view-key'>:</span></div>
                            <div className="col-lg-9"><span className='view-value'>{data.taxrate ? data.taxrate : "---"}</span></div>

                            <div className="col-lg-2"><span className='view-key'>Total Tax</span></div>
                            <div className="col-lg-1"><span className='view-key'>:</span></div>
                            <div className="col-lg-9"><span className='view-value'>{data.totaltax ? data.totaltax : "---"}</span></div>

                            <div className="col-lg-2"><span className='view-key'>Filling Date</span></div>
                            <div className="col-lg-1"><span className='view-key'>:</span></div>
                            <div className="col-lg-9"><span className='view-value'>{data.fillingdate ? data.fillingdate : "---"}</span></div>

                            <div className="col-lg-2"><span className='view-key'>Status</span></div>
                            <div className="col-lg-1"><span className='view-key'>:</span></div>
                            <div className="col-lg-9"><span className='view-value'>{data.paymentstatus== false? "Due": data.paymentstatus == true? "Paid": "---"}</span></div>
                        </div>
                    </div>

                </div>
            </section >
            <SpinnerComponent spinner={spinner} />
        </>
    )
}

export default ViewTax
