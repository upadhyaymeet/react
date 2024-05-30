import React, { Suspense, lazy, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import Header from "./components/Header"
import Body from "./components/Body"
import Contact from "./components/Contact"
import About from "./components/About"
import RestaurantMenu from "./components/RestaurantMenu"
import ErrorPage from "./components/ErrorPage"
import UserContext from "./utils/UserContext"
// import Grocery from "./components/Grocery"

const Grocery = lazy(()=>import("./components/Grocery"))

const AppLayout = () =>{
    const [userName, setUserName] = useState()

    useEffect(()=>{
        const data={
            name:"Akshaya"
        }
        setUserName(data.name)
    },[])
    return (
        <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
        <div className="main-container">
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
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
                path:"grocery",
                element:(
                <Suspense>
                    <Grocery />
                </Suspense>
                )
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