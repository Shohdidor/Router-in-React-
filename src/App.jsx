import { useState } from 'react'
import './App.css'
import Switcher from './components/Switcher'
import { useTranslation } from 'react-i18next'
import Layout from './Layout/Layout'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'


function App ()  {
  const router = createBrowserRouter ( [ 
    {
      path : "/",
      element : <Layout />,
      children : [
        {
          index : true ,
          element : <Home />
        },
        {
          path : "about" ,
          element : <About />
        },
        {
          path : "contact"  ,
          element : <Contact />
        },
        {
          path : "*",
          element : <NotFound />
        }
      ]
    },
  ])

  const [ lng , setLng ] = useState ( "en" )
  const { t , i18n } = useTranslation ()
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
    <>
        <RouterProvider router={router} />
    
    </>
  )
}

export default App
