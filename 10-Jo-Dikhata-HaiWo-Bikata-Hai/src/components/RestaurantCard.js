import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    // console.log(props)
    const {name, avgRating, cuisines, costForTwo, cloudinaryImageId} = props.resData?.info
    const {deliveryTime} = props.resData?.info?.sla
    return (
        <div className="w-[300px] shadow-2xl p-6 bg-gray-200 h-[500px]">
            <div className="res-img">
                <img className="min-w-[250px]" src={CDN_URL+cloudinaryImageId} />
            </div>
            <div className="mt-2">
                <div className="font-bold">{name}</div>
                <div className="text-gray-500 text-[16px]">{cuisines.join(" , ")}</div>
                <div>{costForTwo}</div>
                <div>{avgRating}</div>
                <div>{deliveryTime} minutes</div>
            </div>
        </div>
    )
}

export default RestaurantCard