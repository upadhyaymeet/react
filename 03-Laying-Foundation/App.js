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


// Assigments 

// const nestedHeader = React.createElement(
//     "div",
//     {className:"title"},[
//         React.createElement("h1", {}, "H1 heading"),
//         React.createElement("h2", {}, "H2 heading"),
//         React.createElement("h3", {}, "H3 heading"),
//     ]
// )
// const h1 = <h1>H1 heading</h1>
// const h2 = <h2>H1 heading</h2>
// const h3 = <h3>H1 heading</h3>
// const nestedHeader = (
//     <div className="title">
//         <h1>Heading H1</h1>
//         <h2>Heading H2</h2>
//         <h3>Heading H3</h3>
//     </div>
// )

// const NestedHeader = () =>(
//     <div className="title">
//         <h1>Heading H1</h1>
//         <h1>Heading H2</h1>
//         <h1>Heading H3</h1>
//     </div>
// )

// const TitleComponent = () => (
//     <div>
//         <NestedHeader />
//     </div>
// )
const Logo = () => (
    <img className="logo" src="https://cdn.vectorstock.com/i/1000v/88/58/laurel-wreath-simple-concept-logo-vector-4028858.avif"/>
)

const HeaderComponent = () => (
    <div className="container">
        <Logo />
        <input type="text" placeholder="enter a search box"/>
        <img className="user-icon" src="https://cdn.vectorstock.com/i/1000v/88/58/laurel-wreath-simple-concept-logo-vector-4028858.avif" />
    </div>
)



const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
// root.render(elem)
// root.render(<HeadingComponent />)
// root.render(HeadingComponent())
// root.render(nestedHeader)
root.render(<HeaderComponent />)