import { IMG_CDN_URL } from "../constants";

const MenuItemCard = (props) => {
  const { menuItem } = props;
  const { imageId, name, price, description } = menuItem;

  return (
    <div className="p-3 m-1 w-104 shadow-md flex justify-between">
      <div className="">
        {" "}
        <h3 className="font-semibold py-1 text-md truncate pl-1">{name}</h3>
        <h2 className="font-normal pl-1 pb-2 text-sm">Rs.{parseInt(price / 100)}</h2>
        <h2 className="font-light pl-1 text-xs">{description}</h2>
      </div>
      <div className="flex flex-col">
        <img
          className="rounded-xl h-20 w-28"
          alt="menu item dish"
          src={IMG_CDN_URL + imageId}
        />
        <button className="py-1 px-2 mt-1 border-4 border-green-700">Add</button>
      </div>
    </div>
  );
};

export default MenuItemCard;
