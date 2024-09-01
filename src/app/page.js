"use client";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
// import Cards from "./components/cards";
import Hero from "./components/Hero";

export default function Page() {
  return (
    <>

      <NavBar />
      <Hero />
      {/* <Cards /> */}

      <div className="h-screen"></div>
    </>
  );
}
