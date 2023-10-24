import React from 'react'

export const Proyectos02 = () => {



    const team = [
        {
            avatar: "src/img/Proyectos-img/codigo-img.jpg",
            name: "Tienda web de comidas ",
            title: "Tecnologias usadas: html,css,js,react"
        },
        {
            avatar: "src/img/Proyectos-img/codigo-img02.jpg",
            name: "Tienda web de ropa",
            title: "Tecnologias usadas: html,css,js,react"
        },
        {
            avatar: "src/img/Proyectos-img/codigo-img.jpg",
            name: "Tienda web de accesorios",
            title: "Tecnologias usadas: html,css,js,react"
        },
        {
            avatar: "src/img/Proyectos-img/codigo-img02.jpg",
            name: "Aplicacion de clima ",
            title: "Tecnologias usadas: html,css,js,react"
        },
        {
            avatar: "src/img/Proyectos-img/codigo-img.jpg",
            name: "Pagina web de venta de autos ",
            title: "Tecnologias usadas: html,css,js,react"
        },
        {
            avatar: "src/img/Proyectos-img/codigo-img02.jpg",
            name: "Pagina web de pagina de hoteles",
            title: "Tecnologias usadas: html,css,js,react"
        },
    ]

    return (
        <section className="py-14 bg-gradient-to-l from-gray-700 via-gray-900 to-black">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto sm:text-center">
                    <h3 className="text-white 0 text-3xl font-semibold sm:text-4xl">
                        Proyectos
                    </h3>
                    <p className="text-white mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-full h-60 sm:h-52 md:h-56">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg text-white font-semibold">{item.name}</h4>
                                        <p className="text-blue-400">{item.title}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

