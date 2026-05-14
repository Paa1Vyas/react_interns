import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Home from './Home.jsx'


  const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true, 
       
        element:<Home/>,

      },
      {
        index:true ,
        path:"/about",
        element:<About/>,
      },
      {
        index:true ,
        path:"/contact",
        element:<Contact/>,
      },
    ]
    },
  ]

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router}/>
  </StrictMode>,
)
