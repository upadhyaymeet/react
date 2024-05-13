
const parent = React.createElement(
    "div",
    {id:"parent"},
    "Hey this is div"
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)