import React from "react"
import ReactDOM from "react-dom"

const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child"},
            [
                React.createElement("h1",{},"Hey First Heading"),
                React.createElement("h2",{},"Hey Second Heading")
            ]
        ),
        React.createElement(
            "div",
            {id:"child2"},
            [
                React.createElement("h1", {}, "Hey First Heading"),
                React.createElement("h2", {}, "Hey Second Heading")
            ]
        )
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)