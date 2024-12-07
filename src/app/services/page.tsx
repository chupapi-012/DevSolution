"use client";

import React from 'react';

import AllServices from './_components/Allservices';
import Popup from './_components/Popup';
import Subservices1 from './_components/subservices1';


const ServicesPage = () => {
  return (
    <div>
      <AllServices />
      <Popup />
      <Subservices1 />
    </div>
  );
};

export default ServicesPage;

