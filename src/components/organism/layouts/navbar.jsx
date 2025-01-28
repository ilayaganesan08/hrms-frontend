import React, { useState } from 'react';
import { Success } from '../../../utils/alert/swal';
import { onErrorImage } from '../../../common/validate';
import SwalDialog from '../../../utils/alert/swaldialog';


const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
        const body = document.body;
        if (isSidebarOpen) {
            body.classList.remove('toggle-sidebar');
        } else {
            body.classList.add('toggle-sidebar');
        }
    };

    const handleLogout = () => {
        SwalDialog({
            title: 'Are you sure?',
            text: 'You will be logged out of your session.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log out!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('avenscommercetoken');
                localStorage.removeItem('role');
                Success('You have successfully signed out.');
                window.location.href = '/';
            }
        });
    };

    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center">
                        <img src="assets/img/logo.png" alt="" onError={onErrorImage} />
                        <span className="d-none d-lg-block">HRMS</span>
                    </a>
                    <i className="bi bi-list toggle-sidebar-btn"
                        onClick={handleSidebarToggle}
                        style={{ cursor: 'pointer' }} ></i>

                </div>

                <div className="search-bar">
                    <form className="search-form d-flex align-items-center" method="POST" action="#">
                        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                        <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                    </form>
                </div>

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">

                        {/* Other Nav Items */}

                        <li className="nav-item dropdown pe-3">

                            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" onError={onErrorImage} />
                                <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                            </a>

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>Kevin Anderson</h6>
                                    <span>Web Designer</span>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                        <i className="bi bi-person"></i>
                                        <span>My Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                        <i className="bi bi-gear"></i>
                                        <span>Account Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                        <i className="bi bi-question-circle"></i>
                                        <span>Need Help?</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#" onClick={handleLogout}>
                                        <i className="bi bi-box-arrow-right"></i>
                                        <span>Log Out</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar;
