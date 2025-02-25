import React from 'react'
import Home from '../pages/Home/Home'
import { BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <SignUp/>
    },
])
function MalingoRoute() {
  return <RouterProvider router={router}/>
}

export default MalingoRoute
