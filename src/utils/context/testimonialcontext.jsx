import React, { createContext, useContext, useState } from 'react';
import ImportedURL from '../../common/api';
import axios from 'axios';

const TestimonialContext = createContext();
const sampelist = [
    {
        "_id": "1",
        "author": "What is HRMS?",
        "role": "HRMS ",
        "isactive": true
    },
    {
        "_id": "2",
        "author": "How do I reset my password?",
        "role": "To reset your password, go to the login page, click on 'Forgot Password?', and follow the instructions sent to your email.",
        "isactive": false
    },

]
const TestimonialProvider = ({ children }) => {
    const [testimonial, setTestimonial] = useState({});
    const [listTestimonial, setListTestimonial] = useState([]);

    const getTestimonial = () => {
        axios.get(ImportedURL.ROOTURL + 'testimonial/listtestimonial')
            .then((res) => {
                if (res.data)
                    setListTestimonial(res.data.data);
            })
            .catch((err) => {
                console.log(err)
            })
    };

    const viewTestimonial = (id) => {
        axios.get(ImportedURL.ROOTURL + 'testimonial/viewtestimonial/' + id)
            .then((res) => {
                if (res.data)
                    setTestimonial(res.data.data);
            })
            .catch((err) => {
                console.log(err)
            })
    };

    const resetTestimonial = () => {
        setTestimonial({});
    };
    const handleInptChangeTestimonial = (name, value) => {
        setTestimonial({ ...testimonial, [name]: value });
    };
    return (
        <TestimonialContext.Provider value={{ testimonial, getTestimonial, resetTestimonial, listTestimonial, viewTestimonial, handleInptChangeTestimonial }}>
            {children}
        </TestimonialContext.Provider>
    );
};

const useTestimonial = () => {
    return useContext(TestimonialContext);
};

export { TestimonialProvider, useTestimonial };