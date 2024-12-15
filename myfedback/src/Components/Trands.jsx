import React from 'react'

function Card2() {

  const cards =[
    { images: "./food.png",title :"Eat & Drink" },
    { images: "./mic.png", title :"Event" },
    { images: "./club.png", title :"Club" },
    { images: "./travel.png", title :"Think to do" },
  ]
  return (
   <section>
      <h1 className=' text-[#26395C] text-xl md:text-3xl lg:text-4xl font-semibold text-center mt-10 mb-10'>What are you in the mood for?</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 container mx-auto p-4 '>
        {
        cards.map((card, index)=>(
          <div key={index} className='flex flex-col items-center overflow-hidden' >
         <img className=' ' src={card.images} />
            <div>
            <h2 className='text-center text-[#26395C] font-bold text-xl sm:text-2xl'>{card.title}</h2>   
            </div>
            </div>
        ))}
      </div>
   </section>
  )
}
export default Card2
