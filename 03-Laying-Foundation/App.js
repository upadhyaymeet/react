import React from "react";
import ReactDOM from "react-dom/client"

// pure react : React.createElement => Object => HTMLELEMENT (Render)
const heading = React.createElement("h1", {}, "hey this is h1 heading")
// console.log(heading)

// jsx : jsx(transpiled by Babel) => React.createElement => ReactElement => JS Object => HTML Element(render)

// const elem = <h1>Namaste React with Jsx</h1>
const elem = (
    <h1>
        Namaste react with jsx
        {/* {heading} */}
    </h1>
)
// console.log(elem)
// one way to create 
// const HeadingComponent = () => {
//     return(
//     <h1>Hey this is h1</h1>
// )
// }

const Title = function (){
    return (
        <p>Namaste react using Title</p>
    )
}
const isTrue = false
const data = "Components"

const HeadingComponent = () => (
    <div className="heading">
        <h1>Hey this is javascript {isTrue? "true" : "false"}</h1>
        {elem}
        {heading}
        <Title />
        <Title></Title>
        {Title()}
        {<Title />}
        {data}
        {data}
        {data}
    </div>
) 
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
// root.render(elem)
// root.render(<HeadingComponent />)
root.render(HeadingComponent())