import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { HeaderNav } from '../Components/Layout/HeaderNav'
import { Footer } from '../Components/Layout/Footer'
import { HeroSection } from '../Components/Layout/HeroSection'
import { Inicio } from '../Components/Inicio'



export const MisRutas = () => {
    return (

        <BrowserRouter>
            {/* Header y navegacion */}
            <HeaderNav />


            <HeroSection />



            {/* contenido central */}
            <section className='contenido'>
                <Inicio />
            </section>



            {/* Footer*/}
            <Footer />


        </BrowserRouter>



    )
}
