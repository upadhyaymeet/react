import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { MENU_API } from "../utils/constants"
import { useParams } from "react-router-dom"

const RestaurantMenu = () =>{

    const [resInfo ,setResInfo] = useState(null)
    const {resId} = useParams()

    useEffect(()=>{
        fetchMenu()
    }, [])

    const fetchMenu = async() =>{
        const data = await fetch(MENU_API+resId)
        const json = await data.json()
        setResInfo(json.data)
    }

    if(resInfo == null) <Shimmer/> 

    return(
        <div>
            <h1>{resInfo?.cards[2]?.card?.card?.info.name}</h1>
            <h4>{resInfo?.cards[2]?.card?.card?.info.cuisines.join(", ")}</h4>
            <p>{resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}</p>

            <ul>
                {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(item =>
                     <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.defaultPrice/100 || item.card.info.price/100}</li>
                     )}
            </ul>
        </div>
    )
}

export default RestaurantMenu