import { LOGO_URL } from "../utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {
    
    const [btnNameReact, setBtnNameReact] = useState("Login")
    const onlineStatus = useOnlineStatus()
    return (
        <div className="flex items-center justify-between p-6 shadow-xl bg-red-50">
            <div className="w-1/2">
                <img className="w-[125px]" src={LOGO_URL}/>
            </div>
            <div className="w-1/2">
                <ul className="flex gap-6 text-xl">
                    <li>OnlineStatus : {onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><button className="login-btn" onClick={()=>{
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                    }}>{btnNameReact}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header