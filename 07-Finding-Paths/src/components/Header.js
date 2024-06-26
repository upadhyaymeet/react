import { LOGO_URL } from "../utils/constants"
import { useState } from "react"

const Header = () => {
    
    const [btnNameReact, setBtnNameReact] = useState("Login")

    return (
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li><button className="login-btn" onClick={()=>{
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                    }}>{btnNameReact}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header