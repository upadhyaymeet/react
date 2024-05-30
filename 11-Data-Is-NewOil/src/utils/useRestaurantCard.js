import { useEffect, useState } from "react";

const useRestaurantCard = () => {
  //code logic
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants,setFilteredRestaurants] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3071588&lng=73.1812187&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json)
    setListOfRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  return {listOfRestaurants, filteredRestaurants, setFilteredRestaurants, setListOfRestaurants};
};

export default useRestaurantCard;
