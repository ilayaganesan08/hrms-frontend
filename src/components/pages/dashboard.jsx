import React, { useState } from 'react'
import DashboardCard from '../molecules/dashboardcard'


const Dashboard = () => {

    const [cards, setCards] = useState([
        { title: "Sales", date: "Today", count: 100, percentage: "10%" },
        { title: "Revenue", date: " This Month", count: 250, percentage: "150%" },
        { title: "Customers", date: "This Year", count: 1124, percentage: "100%" },
        { title: "Sales", date: "This Month", count: 1124, percentage: "50%" },
    ]);

    return (
        <>
            <div className="pagetitle">
                <h1>Dashboard</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                </nav>
            </div>
            <section className="section dashboard">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            {
                                cards.map((item, i) => {
                                    return <DashboardCard title={item.title} date={item.date} count={item.count} percentage={item.percentage} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard
