import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    const {resData} = props
    const {name, avgRating, cloudinaryImageId, costForTwo, cuisines} =  resData?.info
    const {deliveryTime} = resData?.info.sla

    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <div className="res-img">
                <img src={CDN_URL+cloudinaryImageId} alt="restaurant-img"/>
            </div>
            <div className="res-info">
                <h3>{name}</h3>
                <h4>{cuisines.join(",")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{costForTwo}</h4>
                <h4>{deliveryTime} minutes</h4>
            </div>
        </div>  
    )
}
export default RestaurantCard