import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './pages/Home/Home'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from './pages/Layout/Layout'
import Courses from './pages/Courses/Courses'
import CourseDetails from './pages/CourseDetails/CourseDetails'
import NotFound from './pages/NotFound/NotFound'
import About from './pages/About/About'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // renders at "/"
        element: <Home />,
      },
      {
        path: "about", // "/about",
        element: <About />
      },
      {
        path: "courses", // "/courses"
        element: <Courses />,
      },
      {
        path: "courses/:id", // "/courses/1"
        element: <CourseDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
