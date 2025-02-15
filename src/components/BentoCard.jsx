import React from 'react'

const BentoCard = ({src, title, description }) => {
  return (
    <div className='relative size-full'>
        <video 
           src={src} 
           loop 
           muted
           autoPlay
           className='absolute top-0 left-0 size-full object-cover rounded-md object-center'
        />
        <div className='relative z-10 flex flex-col size-full justify-between p-5 text-blue-50'>
            <div>
                <h1 className='bento-title special-font'>{title}</h1>
                {description && (
                    <p className='mt-3 max-w-64 text-xs md:text-base'>{description}</p>
                )} 
            </div>
        </div>
    </div>
  )
}

export default BentoCard
