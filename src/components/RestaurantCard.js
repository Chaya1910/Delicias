import { IMG_CDN_URL } from "../constants";
import Star from "../assets/img/Star.png";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, areaName } =
    resData?.info;

  return (
    <div className="p-3 m-2 h-88 w-64 shadow-lg">
      <img
        className="rounded-2xl h-40 w-64"
        alt="res-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-semibold py-1 text-md truncate pl-1">{name}</h3>
      <h4 className="">
        <img src={Star} className="h-5 inline pr-2 mb-1 pl-1" />
        {avgRating}
      </h4>
      <h4 className="text-wrap truncate pl-1 font-light text-sm">
        {cuisines.join(", ")}
      </h4>
      <h4 className="pl-1 font-light text-sm">{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
