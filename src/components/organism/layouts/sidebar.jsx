import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const pathSegment = currentPath ? `/${currentPath.split('/')[1]}` : '';

    const getContent = () => {
        let content = []
        let unique = 0

        content.push(
            {
                "id": unique++,
                "label": "Dashboard",
                "icon": "bi bi-grid",
                "active": ["/"],
                "to": "/"
            },
            {
                "id": unique++,
                "label": "Setup",
                "icon": "bi bi-gem",
                "subContent": [
                    {
                        "id": unique++,
                        "label": "Faq",
                        "icon": "bi bi-x-mailbox2",
                        "active": ["/list-faq", "/add-faq", "/edit-faq", "/view-faq"],
                        "to": "/list-faq"
                    },
                    {
                        "id": unique++,
                        "label": "Testimonial",
                        "icon": "bi bi-x-mailbox2",
                        "active": ["/list-testimonial", "/add-testimonial", "/edit-testimonial", "/view-testimonial"],
                        "to": "/list-testimonial"
                    },
                ]
            },
          
            
            {
                "id": unique++,
                "label": "Sales",
                "icon": "bi bi-currency-dollar",
                "subContent": [
                    {
                        "id": unique++,
                        "label": "Tax",
                        "active": ["/list-tax", "/add-tax", "/edit-tax", "/view-tax"],
                        "to": "/list-tax"
                    },
                ]
            }
            
        )

        return content;
    }

    const content = getContent();
    return (
        <>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    {
                        content.map((item, i) => {
                            let active = item.active ? item.active.includes(pathSegment) : false;
                            if (item.subContent && item.subContent.length > 0) {
                                let collapseActive = item.subContent.some((e) => (e.active.includes(pathSegment)));
                                return (
                                    <li className="nav-item" key={i}>
                                        <a className={`nav-link ${collapseActive ? 'active' : 'collapsed'}`} data-bs-target={`#components-nav-${i}`} data-bs-toggle="collapse" href="#">
                                            <i className={item.icon}></i><span>{item.label}</span><i className="bi bi-chevron-down ms-auto"></i>
                                        </a>
                                        <ul id={`components-nav-${i}`} className={`nav-content collapse ${collapseActive ? 'show' : ''}`} data-bs-parent="#sidebar-nav">
                                            {
                                                item.subContent.map((subcontent, j) => {
                                                    let subActive = subcontent.active ? subcontent.active.includes(pathSegment) : false;
                                                    return (
                                                        <li key={j}>
                                                            <Link className={subActive ? 'active' : ''} to={subcontent.to}>
                                                                <i className="bi bi-circle"></i><span>{subcontent.label}</span>
                                                            </Link>
                                                        </li>
                                                    )

                                                })
                                            }
                                        </ul>
                                    </li>
                                )
                            } else {
                                return (
                                    <li className="nav-item" key={i}>
                                        <Link className={`nav-link ${active ? 'active' : 'collapsed'}`} to={item.to}>
                                            <i className={item.icon}></i>
                                            <span>{item.label}</span>
                                        </Link>
                                    </li>
                                )
                            }

                        })
                    }
                </ul>
            </aside>
        </>
    )
}

export default Sidebar
