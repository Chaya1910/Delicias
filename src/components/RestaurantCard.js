import { IMG_CDN_URL } from "../constants";

// const RestaurantCard = ({id, name, cuisines, cloudinaryImageId, lastMileTravelString}) => {

    const RestaurantCard = (props) => {
        const { resData } = props;
        const {
          cloudinaryImageId,
          name,
          avgRating,
          cuisines,
          costForTwo,
          deliveryTime,
        } = resData?.info;


        return (
            <div>
              <img
                className="rounded-lg"
                alt="res-logo"
                src={IMG_CDN_URL + cloudinaryImageId}
              />
              <h3 className="font-bold py-4 text-lg">{name}</h3>
              <h4>{cuisines.join(", ")}</h4>
              <h4>{avgRating} stars</h4>
              <h4>₹{costForTwo / 100} FOR TWO</h4>
              <h4>{deliveryTime} minutes</h4>
            </div>
          );
        };

export default RestaurantCard;

        
//     return (
//         <div  className="card"> 
//             <img src={ IMG_CDN_URL +cloudinaryImageId}></img>
//             <h2>{name}</h2>
//             <h3>{cuisines.join(", ")}</h3>
//             <h4>{lastMileTravelString}</h4>
//         </div>
//     );
// };

// export default RestaurantCard;