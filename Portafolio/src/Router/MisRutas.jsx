import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { HeaderNav } from '../Components/Layout/HeaderNav'
import { Footer } from '../Components/Layout/Footer'
import { HeroSection } from '../Components/Layout/HeroSection'
import { Inicio } from '../Components/Inicio'
import { ProyectosSection } from '../Components/ProyectosSection'
import { Proyectos02 } from '../Components/Proyectos02'
import { Contacto } from '../Components/Contacto'



export const MisRutas = () => {
    return (

        <BrowserRouter >
            {/* Header y navegacion */}
            <HeaderNav />


            <HeroSection />


          
            {/* contenido central */}
            <section className='skills bg-base-200 bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
                <Inicio />
            </section>

            


            <section className='Proyectos'>
                <ProyectosSection />
            </section>

            

            <section className='Proyecto02'>
                <Proyectos02 />
            </section>

           

            <section className='Contacto'>
                <Contacto />
            </section>


            {/* Footer*/}
            <Footer />


        </BrowserRouter>



    )
}
