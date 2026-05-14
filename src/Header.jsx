import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  return (
      <>
          <header>
            <div className='bg-gray-800  flex justify-between  items-center p-4'>
                <div>
                    <h1 className='text-4xl text-white '>MY App</h1>
                </div>
                <div>
                     <nav className='text-gray-200 p-3'>
                        <NavLink to="/" className="mx-2 hover:text-blue-300">Home</NavLink>
                        <NavLink to="/about" className="mx-2 hover:text-blue-300">About</NavLink>
                        <NavLink to="/Contact" className="mx-2 hover:text-blue-300">Contact</NavLink>
                     </nav>
                </div>

                <div>
                    <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition'>Login</button>
                </div>
            </div>

            
          </header>
      </>
  )
}
