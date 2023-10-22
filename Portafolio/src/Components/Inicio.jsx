import React from 'react'

export const Inicio = () => {
  return (

    <div className='main-Section w-full h-full px-24 flex '>

      

      
      <div className='SobreMi-Section  m-12 ' >
        <h1>
          sobre mi
        </h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum atque laboriosam reprehenderit, perspiciatis eligendi dolorem culpa, itaque harum voluptates aliquid fugit distinctio, delectus soluta vero sit quam deleniti dolorum. Iusto?</p>
      </div>




      <div className='Skills-Section flex  items-center '>


        <div className='skill w-32 h-32 bg-white flex items-center justify-center shadow-sm rounded-full'><img src="src\img\logosSkils\js.png" alt="" /></div>
        <div className='skill w-32 h-32 bg-white flex items-center justify-center shadow-sm rounded-full '><img src="src\img\logosSkils\git logo.png" alt="" /></div>
        <div className='skill w-32 h-32 bg-white flex items-center justify-center shadow-sm rounded-full'><img src="src\img\logosSkils\reactjs.png" alt="" /></div>
        <div className='skill w-32 h-32 bg-white flex items-center justify-center shadow-sm rounded-full'><img src="src\img\logosSkils\typescript logo.png" alt="" /></div>
        <div className='skill w-32 h-32 bg-white flex items-center justify-center shadow-sm rounded-full'><img src="src\img\logosSkils\css.png" alt="" /></div>
        <img className="mask mask-circle w-32 h-32 " src="src\img\logosSkils\css.png" />
        <img className="mask mask-circle  w-32 h-32" src="src\img\logosSkils\reactjs.png" />
        <img className="mask mask-circle  w-32 h-32" src="src\img\logosSkils\git logo.png" />
      
      </div>





    </div>

  )
}
