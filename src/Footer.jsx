import React from 'react'

export default function Footer() {
  return (
      <>
        <footer className='bg-gray-800 p-4 text-white text-center mt-8'>
            <p>&copy; 2024 Weather App. Powered by Open-Meteo API.</p>
            <p className="text-sm text-gray-400 mt-2">
              No API key required | Free for non-commercial use
            </p>
        </footer>
      </>
  )
}
