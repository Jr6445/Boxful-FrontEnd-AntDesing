import React, { useState } from 'react';
import FormContext from './context/FormContext';

const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        address: '',
        date: null,
        name: '',
        lastName: '',
        email: '',
        addressDestinatation: '',
        selectedDepartment: 'San salvador',
        selectedTown: '',
        referencePoint: '',
        indications: '',
        items: [ // Convertir alto, largo, ancho, peso y contenido en una lista de objetos
            { largo: '0', alto: '0', ancho: '0', peso: '0', contenido: '0' }
        ],
    });


    const updateFormData = (newData) => {
        setFormData((prevData) => ({
            ...prevData,
            ...newData,
        }));
    };

    console.log(formData);

    return (
        <FormContext.Provider value={{ formData, updateFormData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;
