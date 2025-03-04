import React, { createContext, useContext, useState } from 'react';
import ImportedURL from '../../common/api';
import axios from 'axios';

const EmployeesalaryContext = createContext();


const EmployeesalaryProvider = ({ children }) => {
    const [employeesalary, setEmployeesalary] = useState({});
    const [listEmployeesalary, setListEmployeesalary] = useState([]);

    const getEmployeesalary = () => {
        axios.get(ImportedURL.ROOTURL + 'employeesalary/listemployeesalary')
            .then((res) => {
                if (res.data)
                    setListEmployeesalary(res.data.data);
            })
            .catch((err) => {
                console.log(err)
            })
    };

    const viewEmployeesalary = (id) => {
        axios.get(ImportedURL.ROOTURL + 'employeesalaryes/viewemployeesalary/' + id)
            .then((res) => {
                if (res.data)
                    setEmployeesalary(res.data.data);
            })
            .catch((err) => {
                console.log(err)
            })
    };

    const resetEmployeesalary = () => {
        setEmployeesalary({});
    };
    const handleInptChangeEmployeesalary = (name, value) => {
        setEmployeesalary({ ...employeesalary, [name]: value });
    };
    return (
        <EmployeesalaryContext.Provider value={{ employeesalary, getEmployeesalary, resetEmployeesalary, listEmployeesalary, viewEmployeesalary, handleInptChangeEmployeesalary }}>
            {children}
        </EmployeesalaryContext.Provider>
    );
};

const useEmployeesalary = () => {
    return useContext(EmployeesalaryContext);
};

export { EmployeesalaryProvider, useEmployeesalary };