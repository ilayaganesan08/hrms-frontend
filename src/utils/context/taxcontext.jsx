import React, { createContext, useContext, useState } from 'react';
import ImportedURL from '../../common/api';
import axios from 'axios';

const TaxContext = createContext();


const TaxProvider = ({ children }) => {
    const [tax, setTax] = useState({});
    const [listTax, setListTax] = useState([]);

    const getTax = () => {
        axios.get(ImportedURL.ROOTURL + 'taxes/listtax')
            .then((res) => {
                if (res.data)
                    setListTax(res.data.data);
            })
            .catch((err) => {
                console.log(err)
            })
    };

    const viewTax = (id) => {
        axios.get(ImportedURL.ROOTURL + 'taxes/viewtax/' + id)
            .then((res) => {
                if (res.data)
                    setTax(res.data.data);
            })
            .catch((err) => {
                console.log(err)
            })
    };

    const resetTax = () => {
        setTax({});
    };
    const handleInptChangeTax = (name, value) => {
        setTax({ ...tax, [name]: value });
    };
    return (
        <TaxContext.Provider value={{ tax, getTax, resetTax, listTax, viewTax, handleInptChangeTax }}>
            {children}
        </TaxContext.Provider>
    );
};

const useTax = () => {
    return useContext(TaxContext);
};

export { TaxProvider, useTax };