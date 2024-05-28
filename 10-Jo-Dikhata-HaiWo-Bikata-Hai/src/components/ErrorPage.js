import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    // console.log(useRouteError)
    const error = useRouteError()
    console.log(error)
    return(
        <div>
            <h1>Opss!</h1>
            <h1>Page Not found</h1>
            <h1>{error.status} - {error.statusText}</h1>
        </div>
    )
}

export default ErrorPage