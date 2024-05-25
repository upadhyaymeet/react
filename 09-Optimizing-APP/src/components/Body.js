import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Shimmer from "./Shimmer"
import useRestaurantCard from "../utils/useRestaurantCard"
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {
    // const [listOfRestaurants, setListOfRestaurants] = useState([])
    // const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")
    const onlineStatus = useOnlineStatus()
    
    const {listOfRestaurants, setListOfRestaurants,filteredRestaurants, setFilteredRestaurants } = useRestaurantCard()
    // setFilteredRestaurants(listOfRestaurants)
    // useEffect(()=>{
    //     fetchData()
    // }, [])

    // const fetchData = async() => {
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3071588&lng=73.1812187&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    //     const json = await data.json()
    //     // console.log(json)
    //     // console.log(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    //     setListOfRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    //     setFilteredRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // }
    
    // if(listOfRestaurants.length === 0){
    //     return <h1>Loading...</h1>
    // }

    if(!onlineStatus){
        return (
            <h1>Internet connection is down</h1>
        )
    }

    return listOfRestaurants.length === 0 ? (<Shimmer />):(
        <div className="body-container">
            <div className="filter-container">
                <div className="filter-btn">
                    <button onClick={()=>{
                       const filteredRestaurant = listOfRestaurants.filter((res)=>res.info.avgRating > 4)
                       setListOfRestaurants(filteredRestaurant)
                    }}>Top Rated Restaurant</button>
                </div>
                <div className="search-container">
                    <input type="text" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }} />
                    <button onClick={()=>{
                        const filterdList = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        // setListOfRestaurants(filterdList)
                        setFilteredRestaurants(filterdList)
                    }}>Search</button>
                </div>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant)=>
                <Link to={"restaurants/"+restaurant.info.id} key={restaurant.info.id}> <RestaurantCard  resData={restaurant}/></Link>
                    
                )}
            </div>
        </div>
    )
}

export default Body