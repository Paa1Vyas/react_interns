import React from 'react'

export default function Header() {
  return (
      <>
       <header className='bg-gray-800 p-4 text-white'>
              <div className="flex items-center justify-between">
     
                 <div className="text-xl font-bold">Weather App</div>
               
                 <div className='space-x-4'>
                       <span className="text-gray-300">Powered by Open-Meteo API</span>
                 </div>

                 <div>
                         <span className="text-sm">Free Weather Data</span>
                 </div>
                     
              </div>
       </header>
      </>
  )
}
