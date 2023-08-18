import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import InformationForm from './components/InformationForm';
import Navbar from './components/navbar';
import PackageForm from './components/PackageForm';

import FormProvider from './components/FormProvider'; 

function App() {
  return (
    <>
      <FormProvider>
        <Routes>
          <Route path="/" element={<InformationForm />} />
          <Route path="/package" element={<PackageForm />} />
          {/* Otras rutas */}
        </Routes>
      </FormProvider>
    </>
  );
}

export default App;
