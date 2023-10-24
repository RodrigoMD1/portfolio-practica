import React from 'react'

export const Inicio = () => {
  return (


    <section className="cta-sec relative  py-4 px-4 md:px-1  " >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-gray-700 via-gray-900 to-black"></div>
      <div className="relative z-10 gap-5 items-center lg:flex">
        <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left px-12">
          <h3 className="text-3xl text-white font-semibold md:text-4xl">
            Sobre mi  <span className="text-blue-400">soy un desarrollador web</span>
          </h3>
          <p className="text-white leading-relaxed mt-3">
            Nam erat risus, sodales sit amet lobortis ut, finibus eget metus. Cras aliquam ante ut tortor posuere feugiat. Duis sodales nisi id porta lacinia.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur delectus temporibus, consequatur iure repellat officia facilis perferendis aut est exercitationem, ad error vero cupiditate dolor eaque placeat nihil saepe!
          </p>
         
        </div>
        <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
          <img
            src="src/img/Proyectos-img/codigo-img02.jpg"
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </section>

  )
}
