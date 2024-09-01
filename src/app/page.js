"use client";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
// import Cards from "./components/cards";
import Hero from "./components/Hero";
import GettingStarted from "./components/GettingStarted";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>

      <NavBar />
      <Hero />
      <GettingStarted />
      {/* <Cards /> */}
      <Footer />
      
    </>
  );
}
