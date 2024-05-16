import React from "react"
import ReactDOM from "react-dom"

const AppLayout = () => {
    return (
        <div id="container">
            <h1>App js file is setup</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)