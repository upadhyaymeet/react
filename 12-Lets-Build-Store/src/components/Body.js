import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantCard from "../utils/useRestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // const [listOfRestaurants, setListOfRestaurants] = useState([])
  // const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const {
    listOfRestaurants,
    setListOfRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
  } = useRestaurantCard();

  const RestaurantCardVeg = withVegLabel(RestaurantCard);

  if (!onlineStatus) {
    return <h1>Internet connection is down</h1>;
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-6">
      <div className="flex justify-around items-center">
        <div className="filter-btn">
          <button
            className="bg-red-600 hover:bg-red-200  px-10 py-2 text-white hover:text-black font-bold text-2xl rounded-2xl"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurants(filteredRestaurant);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="flex gap-5">
          <input
            className="border-2 rounded-lg text-red-500 px-10"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-red-600 hover:bg-red-200  px-10 py-2 text-white hover:text-black font-bold text-2xl rounded-2xl"
            onClick={() => {
              const filterdList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // setListOfRestaurants(filterdList)
              setFilteredRestaurants(filterdList);
            }}
          >
            Search
          </button>
          <div>
            <input className="border border-black" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="flex item justify-center flex-wrap gap-10 mt-8">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <RestaurantCardVeg resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
