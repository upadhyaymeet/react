const heading = React.createElement(
    "h1",
    {id:"heading"},
    "hey this is a h1 tag"
)
console.log(heading)

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(root)
root.render(heading)