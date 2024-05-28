import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo == null) <Shimmer />;

  return (
    <div>
      <h1>{resInfo?.cards[2]?.card?.card?.info.name}</h1>
      <h4>{resInfo?.cards[2]?.card?.card?.info.cuisines.join(", ")}</h4>
      <p>{resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}</p>

      <ul>
        {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
          (item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs.
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
