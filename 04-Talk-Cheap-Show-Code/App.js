import React from "react";
import ReactDOM from "react-dom/client"

const Header = () =>{
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://img.freepik.com/free-vector/restaurant-logo-template_23-2149493636.jpg?w=740&t=st=1715852228~exp=1715852828~hmac=123e211a0c1e5dc63c92c808eb1b3e3cd8d052bc5bb15b7bd9e125e714aff8c4" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    )
}

//dummy data
const resList =  [
    {
    "info": {
    "id": "605290",
    "name": "Chinese Wok",
    "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
    "locality": "Sarod",
    "areaName": "Akota",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Chinese",
    "Asian",
    "Tibetan",
    "Desserts"
    ],
    "avgRating": 4.3,
    "veg": true,
    "parentId": "61955",
    "avgRatingString": "4.3",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 17,
    "lastMileTravel": 0.6,
    "serviceability": "SERVICEABLE",
    "slaString": "15-20 mins",
    "lastMileTravelString": "0.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-05-16 23:59:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Chinese.png",
    "description": "Delivery!"
    },
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Chinese.png"
    }
    },
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹179"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-b6772e86-4432-4977-af4c-d07a965f4bb3"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/chinese-wok-sarod-akota-vadodara-605290",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "568731",
    "name": "Pizza Hut",
    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    "locality": "Crossway Mall",
    "areaName": "Mandvi",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Pizzas"
    ],
    "avgRating": 4.1,
    "parentId": "721",
    "avgRatingString": "4.1",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 1.8,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "1.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-05-17 01:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-b6772e86-4432-4977-af4c-d07a965f4bb3"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/pizza-hut-crossway-mall-mandvi-vadodara-568731",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "105267",
    "name": "UBQ by Barbeque Nation",
    "cloudinaryImageId": "l62eb3tpk2oh4edu74pw",
    "locality": "Vadiwadi",
    "areaName": "Akota",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "North Indian",
    "Barbecue",
    "Biryani",
    "Kebabs",
    "Mughlai",
    "Desserts"
    ],
    "avgRating": 4.2,
    "parentId": "10804",
    "avgRatingString": "4.2",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 2.6,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "2.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-05-16 23:30:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-b6772e86-4432-4977-af4c-d07a965f4bb3"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-vadiwadi-akota-vadodara-105267",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "300373",
    "name": "Barbeque Nation",
    "cloudinaryImageId": "vcqgxtpkue39x1vqay9p",
    "locality": "Gotri",
    "areaName": "Gotri",
    "costForTwo": "₹600 for two",
    "cuisines": [
    "Barbecue",
    "Biryani",
    "Kebabs",
    "Mughlai",
    "Desserts"
    ],
    "avgRating": 4.1,
    "parentId": "2438",
    "avgRatingString": "4.1",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 34,
    "lastMileTravel": 2.6,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "2.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-05-16 23:30:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-b6772e86-4432-4977-af4c-d07a965f4bb3"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/barbeque-nation-gotri-vadodara-300373",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "71414",
    "name": "Rajubhai Chole Kulcha",
    "cloudinaryImageId": "cta6dleljwe4lrmaeujt",
    "locality": "Chikuwadi",
    "areaName": "Alkapuri",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "North Indian"
    ],
    "avgRating": 4.5,
    "veg": true,
    "parentId": "166036",
    "avgRatingString": "4.5",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 29,
    "lastMileTravel": 2.5,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "2.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-05-16 22:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-b6772e86-4432-4977-af4c-d07a965f4bb3"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/rajubhai-chole-kulcha-chikuwadi-alkapuri-vadodara-71414",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "72242",
    "name": "Tadka Punjab Ka",
    "cloudinaryImageId": "qyw10wtkraqbanu4xvtf",
    "locality": "Makarand Desai Road\n",
    "areaName": "Diwalipura",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "North Indian",
    "Chinese",
    "Biryani"
    ],
    "avgRating": 4.3,
    "parentId": "199904",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 4.5,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "4.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-05-16 15:15:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Thali.png",
    "description": "Delivery!"
    },
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Thali.png"
    }
    },
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-b6772e86-4432-4977-af4c-d07a965f4bb3"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/tadka-punjab-ka-makarand-desai-road-diwalipura-vadodara-72242",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "604138",
    "name": "Big Bowl",
    "cloudinaryImageId": "c99751d54e4e1847186c62b3309c1327",
    "locality": "Alankar Tower",
    "areaName": "Sayajigunj",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "North Indian",
    "Chinese",
    "Tibetan",
    "Desserts"
    ],
    "avgRating": 4.3,
    "parentId": "434792",
    "avgRatingString": "4.3",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 15,
    "lastMileTravel": 0.6,
    "serviceability": "SERVICEABLE",
    "slaString": "15-20 mins",
    "lastMileTravelString": "0.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-05-16 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹149"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-b6772e86-4432-4977-af4c-d07a965f4bb3"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/big-bowl-alankar-tower-sayajigunj-vadodara-604138",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "653715",
    "name": "HanuRam Foods Pvt Ltd",
    "cloudinaryImageId": "fc25b56a5fea99c3390f386bd8a0d705",
    "locality": "Chakli Circle",
    "areaName": "Akota",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Sweets",
    "North Indian",
    "Chinese",
    "Snacks",
    "South Indian",
    "Chaat"
    ],
    "avgRating": 4.3,
    "veg": true,
    "parentId": "93334",
    "avgRatingString": "4.3",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 17,
    "lastMileTravel": 1.7,
    "serviceability": "SERVICEABLE",
    "slaString": "15-20 mins",
    "lastMileTravelString": "1.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-05-16 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Mithai.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Mithai.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-b6772e86-4432-4977-af4c-d07a965f4bb3"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/hanuram-foods-pvt-ltd-chakli-circle-akota-vadodara-653715",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "94892",
    "name": "KFC",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/0a394524-ec41-4e42-9b44-a3e4dff3b623_94892.JPG",
    "locality": "Vadodara Central",
    "areaName": "Alkapuri",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Fast Food",
    "Rolls & Wraps"
    ],
    "avgRating": 4.2,
    "parentId": "547",
    "avgRatingString": "4.2",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 22,
    "lastMileTravel": 2.2,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "2.2 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-05-17 03:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Burger.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Burger.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹179"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-b6772e86-4432-4977-af4c-d07a965f4bb3"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/kfc-central-alkapuri-vadodara-94892",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
    ]

const RestaurantCard = (props) => {
    console.log(props)
    const {resData} = props
    const {name, avgRating, cloudinaryImageId, costForTwo, cuisines} =  resData?.info
    const {deliveryTime} = resData?.info.sla
   

    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <div className="res-img">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="restaurant-img"/>
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

const Body = () =>{
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                {
                    resList.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
                
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (
        <div id="container">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
