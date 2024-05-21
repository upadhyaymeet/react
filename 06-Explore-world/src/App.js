import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import Body from "./components/Body"

const AppLayout = () =>{
    return (
        <div className="main-container">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)