import React, {useState} from "react"
import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"

const Body = () =>{

    const [listOfRestaurants, setListOfRestaurants] = useState(resList)
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={
                    ()=>{
                        const filterdRest = listOfRestaurants.filter((res)=>res.info.avgRating > 4)
                        setListOfRestaurants(filterdRest)
                        // console.log("Button Was clicked")
                    }
                }>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
                
            </div>
        </div>
    )
}

export default Body