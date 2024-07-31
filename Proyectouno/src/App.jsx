import { useState } from 'react'
import React from 'react';
import './App.css';
import Header from'./Components/Header/Header';
import Hero from'./Components/Hero/Hero';
import About from'./Components/About/About';
import Servicio from'./Components/Servicio/Servicio';
import Portfolio from'./Components/Portfolio/Portfolio';
import Opiniones from'./Components/Opiniones/Opiniones';
import Footer from'./Components/Footer/Footer';
import { Box } from "@chakra-ui/react";

function App() {

  return (
    <Box className='app' display="flex" flexDirection="column"  bg="#331949" color="white" fontFamily="Poppins" >
      <Header/>
      <Hero/>
      <About/>
      <Servicio/>
      <Portfolio/>
      <Opiniones/>
      <Footer/>
    </Box>

  )
}

export default App
