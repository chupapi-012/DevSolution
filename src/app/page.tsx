"use client";

import React from 'react';

import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import Popup from "@/app/services/_components/Popup";

export default function Home() {
  return (
    <>
      <Banner />
      <FAQ />
      <Popup />
    </>
  );
}
