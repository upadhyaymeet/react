/*
Nested react element
<div id="parent">
<div id="child">
<h1>Hey this is h1 Tag</h1>
<h2>Hey this is h2 tag</h2>
</div>
</div>

ReactElement(object) => HTML(Browser Understand)
<div id="parent">
<div id="child">
<h1>Hey this is h1 Tag</h1>
<h2>Hey this is h2 tag</h2>
</div>
<div id="child2">
<h1>Hey this is h1 Tag</h1>
<h2>Hey this is h2 tag</h2>
</div>
</div>

*/

// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         [
//             React.createElement("h1", {class:"headings background",}, "Hey I am h1 tag"),
//             React.createElement("h2", {class:"headings"}, "Hey I am h2 tag")
//         ]
//     )
// )

const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement("div", {id:"child"}, [
            React.createElement("h1", {class:"background headings"}, "Hey I'm H1 tag"),
            React.createElement("h2", {class:"background headings"}, "Hey I'm H2 tag"),
        ]),
        React.createElement("div", {id:"child2"}, [
            React.createElement("h1", {class:"background headings"}, "Hey I'm H1 tag"),
            React.createElement("h2", {class:"background headings"}, "Hey I'm H2 tag"),
        ])
    ]
)

console.log(parent)

const heading = React.createElement(
    "h1",
    {id:"heading"},
    "hey this is a h1 tag"
)
// console.log(heading)

const root = ReactDOM.createRoot(document.getElementById("root"))
// console.log(root)
root.render(parent)