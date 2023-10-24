import React from 'react'

const team = [
  {
      avatar: "src/img/logosSkils/React.svg.png",
      name: "React JS",
     
  },
  {
      avatar: "src/img/logosSkils/1012822_code_development_logo_mongodb_programming_icon.png",
      name: "MongoDB",
      
  },
  {
      avatar: " src/img/logosSkils/typescript logo.png",
      name: "TypeScript",
      
  },
  {
      avatar: "src/img/logosSkils/git logo.png",
      name: "GIT",
      
  },
  {
      avatar: "src/img/logosSkils/nodejs.png",
      name: "NodeJS",
     
  },
  {
      avatar: "src/img/logosSkils/js.png",
      name: "Javascript",
      
  },
  {
      avatar: "src/img/logosSkils/css.png",
      name: "CSS",
     
  },
  {
      avatar: "src/img/logosSkils/html.png",
      name: "HTML",
      
  },
  {
    avatar: "src/img/logosSkils/9073628_tailwind_icon.png",
    name: "TailwindCSS",
    
},
]


export const ProyectosSection = () => {
 

return (
    <section className="py-14 bg-base-200 bg-gradient-to-l from-gray-700 via-gray-900 to-black">
        <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
            <div className="max-w-xl mx-auto">
                <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                   SKILLS
                </h3>
                
            </div>
            <div className="mt-12">
                <ul className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {
                        team.map((item, idx) => (
                            <li key={idx}>
                                <div className="w-20 h-20 mx-auto">
                                    <img
                                        src={item.avatar}
                                        className="w-full h-full rounded-full"
                                        alt=""
                                    />
                                </div>
                                <div className="mt-2">
                                    <h4 className="text-white font-semibold sm:text-lg">{item.name}</h4>
                                    
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
   
 
