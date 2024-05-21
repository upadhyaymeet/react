import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useEffect, useState } from "react"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3071588&lng=73.1812187&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        // console.log(json)
        // console.log(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListOfRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    
    if(listOfRestaurants.length === 0){
        return <h1>Loading...</h1>
    }
    return (
        <div className="body-container">
            <div className="filter-container">
                <div className="filter-btn">
                    <button onClick={()=>{
                       const filteredRestaurant = listOfRestaurants.filter((res)=>res.info.avgRating > 4)
                       setListOfRestaurants(filteredRestaurant)
                    }}>Top Rated Restaurant</button>
                </div>
                <div className="search-container">
                    <input type="text" />
                    <button>Search</button>
                </div>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant)=>
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                )}
            </div>
        </div>
    )
}

export default Body