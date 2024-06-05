import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0)

  if (resInfo == null) <Shimmer />;

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold my-6 text-2xl">
        {resInfo?.cards[2]?.card?.card?.info.name}
      </h1>

      <p className="font-bold text-lg">
        {resInfo?.cards[2]?.card?.card?.info.cuisines.join(", ")} -
        {resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}
      </p>
      {/* resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards */}

    {
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category)=>
        category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ).map((category, index)=>(
        <RestaurantCategory
        key={category?.card?.card?.title}
        data={category?.card?.card}
        showItems={index === showIndex && true}
        setShowIndex={()=>setShowIndex(index)}
      />
      ))
    }
    </div>
  );
};

export default RestaurantMenu;
