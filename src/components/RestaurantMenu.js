import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";

import useRestaurantMenu from "../utils/useRestrauntMenu";


const RestaurantMenu = () => {
    const { resId } = useParams();

    console.log(resId);



    // async function getRestaurantInfo(){
        // try{

            // const SWIGGY_API_URL = "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/v4/full?lat=21.1702401&lng=72.83106070000001&menuId="+resId;

            const resInfo = useRestaurantMenu(resId);

            if (resInfo === null) return <Shimmer />;

            const { name, cuisines, costForTwoMessage } =
            resInfo?.cards[0]?.card?.card?.info;
          const { itemCards } =
            resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
          console.log(itemCards);

          return (
            <div className="menu">
              <h1>{name}</h1>
              <p>
                {cuisines.join(", ")} - {costForTwoMessage}
              </p>
              <h2>Menu</h2>
              <ul>
                {itemCards.map((item) => (
                  <li key={item.card.info.id}>
                    {item.card.info.name} -{" Rs."}
                    {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
        ))}
      </ul>
    </div>
  );
}


export default RestaurantMenu;




//             const data = await fetch(SWIGGY_API_URL);


//             if(!data.ok){
//                 const err = data.status;
//                 throw new Error(err);
//             }
//             else{
//                 const json = await data.json();
//                 console.log(json);
//             }
//         }catch(err){
//             console.error(err);
//         }
        
//     }

//     return (
//         <div>
//             <h1>Restaurant id: {resId}</h1>
//         </div>
//     )
// }

// export default RestaurantMenu;