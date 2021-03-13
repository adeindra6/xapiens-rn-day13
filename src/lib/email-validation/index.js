import React, { Component, useState } from 'react';

const useEmailValidationForm = (e = '') => {
    const [email, setEmail] = useState(e);

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let verifiedEmail = re.test(String(email).toLowerCase());
    if(verifiedEmail) {
        const Email = () => setEmail(email);
        return{
            Email,
            verifiedEmail,
        };
    }
    else {
        const Email = "";
        return{
            Email,
            verifiedEmail,
        };
    }
};

export default useEmailValidationForm;