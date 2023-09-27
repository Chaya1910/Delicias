import { useParams } from "react-router-dom";

import ShimmerMenu from "./ShimmerMenu";
import Star from "../assets/img/Star.png";

import useRestaurantMenu from "../utils/useRestrauntMenu";
import MenuItemCard from "./MenuItemCard";

const RestaurantMenu = () => {
  const { resId } = useParams();

  console.log(resId);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerMenu />;

  const { name, cuisines, costForTwoMessage, city, avgRating, totalRatingsString } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(resInfo?.cards[0]?.card?.card?.info);

  return (
    <div className="py-8 flex flex-col items-center">
      <div className=" w-[700px]">
        <div className="flex justify-between items-center">
        <div className="py-4 ml-16">
          <h1 className="font-semibold text-xl">{name}</h1>
          <p className="font-light text-md">{cuisines.join(", ")}</p>
          <p className="font-light text-sm">{city}</p>
        </div>
        <div className="border-2 border-gray-200 px-1 py-4 mr-16 rounded-md">
        <h4 className="font-light text-sm text-gray-600"><img src={Star} className="h-5 inline pr-2 mb-1 pl-1"/>{avgRating}</h4>
        <hr/>
        <p className="font-light text-xs text-gray-600">{totalRatingsString}</p>
        </div>
        </div>
        <hr className="pb-8"/>
        <div>
          {itemCards.map((item) => (
            <div className="pb-4">
              <MenuItemCard menuItem={item?.card?.info} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;

