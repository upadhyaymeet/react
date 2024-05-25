import React from "react"
import ReactDOM from "react-dom/client"
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import Header from "./components/Header"
import Body from "./components/Body"
import Contact from "./components/Contact"
import About from "./components/About"
import RestaurantMenu from "./components/RestaurantMenu"
import ErrorPage from "./components/ErrorPage"

const AppLayout = () =>{
    return (
        <div className="main-container">
            <Header />
            <Outlet />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"",
                element:<Body />
            },
            {
                path:"contact",
                element:<Contact />
            },
            {
                path:"about",
                element:<About />
            },
            {
                path:"restaurants/:resId",
                element:<RestaurantMenu />
            }

        ],
        errorElement:<ErrorPage />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)