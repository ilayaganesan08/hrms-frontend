import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumbs = ({ breadCrumbs = null }) => {
    return (
        <>
            {
                (breadCrumbs && breadCrumbs.title)
                    ?
                    <>
                        <div className="pagetitle">
                            <h1>{breadCrumbs.title}</h1>
                            {
                                breadCrumbs.list && breadCrumbs.list.length > 0
                                    ?
                                    <nav>
                                        <ol className="breadcrumb">
                                            {
                                                breadCrumbs.list.map((item, i) => {
                                                    return <li className={`breadcrumb-item ${item.active ? "active" : ''}`} key={i}>{item.active ? item.name : <Link to={item.to}>{item.name}</Link>}</li>
                                                })
                                            }
                                        </ol>
                                    </nav>
                                    : ''
                            }
                        </div>
                    </>
                    : ""
            }
        </>
    )
}

export default BreadCrumbs