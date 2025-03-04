import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BreadCrumbs from '../../../../molecules/breadcrumbs';
import SpinnerComponent from '../../../../atoms/spinner';
import PageHeader from '../../../../atoms/pageheader';
import { useEmployeesalary } from '../../../../../utils/context/employeesalarycontext';

const ViewTax = () => {
    const { id } = useParams();
    const { employeesalary, viewEmployeesalary } = useEmployeesalary();
    // const testimonialReducer = useSelector(state => state.testimonial);
    const data = employeesalary || {};
    const spinner = false;

    const [breadCrumbs] = useState({
        title: "Employeesalary",
        list: [
            { name: "Dashboard", to: "/", active: false },
            { name: "List Employeesalary", to: "/list-employeesalary", active: false },
            { name: "View Employeesalary", to: "/view-employeesalary", active: true },
        ]
    });

    useEffect(() => {
        if (id) {
            // dispatch(spinnerTestimonial());
            viewEmployeesalary(id);
            console.log(employeesalary); // Verify the structure of the data

        }
    }, []);

    return (
        <>
            <BreadCrumbs breadCrumbs={breadCrumbs} />
            <section className="section">
                <div className="card">
                    <div className="card-body">
                        <PageHeader title={"View employeesalary"} linkto='/list-employeesalary' action='Back' icon='ri-arrow-left-line' titleicon='bi bi-x-diamond-fill' />
                        <div className="row g-3">
                            <div className="col-lg-2"><span className='view-key'>Employee Id</span></div>
                            <div className="col-lg-1"><span className='view-key'>:</span></div>
                            <div className="col-lg-9"><span className='view-value'>{data.employeeid ? data.employeeid : "---"}</span></div>

                            <div className="col-lg-2"><span className='view-key'>Basic Salary</span></div>
                            <div className="col-lg-1"><span className='view-key'>:</span></div>
                            <div className="col-lg-9"><span className='view-value'>{data.basicsalary ? data.basicsalary : "---"}</span></div>

                            <div className="col-lg-2"><span className='view-key'>Allowances</span></div>
                            <div className="col-lg-1"><span className='view-key'>:</span></div>
                            <div className="col-lg-9"><span className='view-value'>{data.allowance ? data.allowance : "---"}</span></div>

                            <div className="col-lg-2"><span className='view-key'>Deductions</span></div>
                            <div className="col-lg-1"><span className='view-key'>:</span></div>
                            <div className="col-lg-9"><span className='view-value'>{data.deductions ? data.deductions : "---"}</span></div>

                            <div className="col-lg-2"><span className='view-key'>Net Salary</span></div>
                            <div className="col-lg-1"><span className='view-key'>:</span></div>
                            <div className="col-lg-9"><span className='view-value'>{data.netsalary ? data.netsalary : "---"}</span></div>

                            <div className="col-lg-2"><span className='view-key'>Effective Date</span></div>
                            <div className="col-lg-1"><span className='view-key'>:</span></div>
                            <div className="col-lg-9"><span className='view-value'>{data.effectivedate ? data.effectivedate : "---"}</span></div>

                            {/* <div className="col-lg-2"><span className='view-key'>Status</span></div>
                            <div className="col-lg-1"><span className='view-key'>:</span></div>
                            <div className="col-lg-9"><span className='view-value'>{data.paymentstatus ? data.paymentstatus : "---"}</span></div>
                             */}
                            {/* <div className="col-lg-9"><span className='view-value'>{data.paymentstatus== "Paid"? "Due": data.paymentstatus == "Due"? "Paid": "---"}</span></div> */}
                        </div>
                    </div>

                </div>
            </section >
            <SpinnerComponent spinner={spinner} />
        </>
    )
}

export default ViewTax
