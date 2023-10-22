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

        <BrowserRouter>
            {/* Header y navegacion */}
            <HeaderNav />


            <HeroSection />


            <h1 className='skills-text content-center text-center '>
                skilss
            </h1>
            {/* contenido central */}
            <section className='skills'>
                <Inicio />
            </section>

            <div className="divider">OR</div>


            <section className='Proyectos'>
                <ProyectosSection />
            </section>

            <div className="divider">OR</div>

            <section className='Proyecto02'>
                <Proyectos02 />
            </section>

            <div className="divider">OR</div>

            <section className='Contacto'>
                <Contacto />
            </section>


            {/* Footer*/}
            <Footer />


        </BrowserRouter>



    )
}
