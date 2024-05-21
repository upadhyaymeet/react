import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    console.log(props)
    const {name, avgRating, cuisines, costForTwo, cloudinaryImageId} = props.resData?.info
    const {deliveryTime} = props.resData?.info?.sla
    return (
        <div className="res-card">
            <div className="res-img">
                <img src={CDN_URL+cloudinaryImageId} />
            </div>
            <div className="res-info">
                <div>{name}</div>
                <div>{cuisines.join(" , ")}</div>
                <div>{costForTwo}</div>
                <div>{avgRating}</div>
                <div>{deliveryTime} minutes</div>
            </div>
        </div>
    )
}

export default RestaurantCard