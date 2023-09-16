// import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const filterData = (searchInput, restaurants) => {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
  console.log('inside filter data')
  console.log(searchInput)
  console.log(restaurants)
  console.log(filteredData)
  return filteredData;
};

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(SWIGGY_API_URL);

      if (!response.ok) {
        const err = response.status;
        throw new Error(err);
      } else {
        const json = await response.json();
        console.log(json);

        async function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {
            let checkData =
              json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;

            if (checkData !== undefined) {
              return checkData;
            }
          }
        }

        const resData = await checkJsonData(json);

        setListOfRestraunt(resData);

        console.log(resData[0].info);
        console.log("list of rest ahead");
        console.log(listOfRestaurants[0]?.info);
        setFilteredRestaurants(resData);
        console.log(filteredRestaurants[0]?.info);

      }
    } catch (error) {
      console.error(error);
    }
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  console.log("render");

  return (listOfRestaurants?.length === 0) ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filter">
        <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              console.log(searchInput)
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              const data = filterData(searchInput, listOfRestaurants);
              console.log(data)
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log('top restaurant');
              console.log(filteredList);
            setFilteredRestaurants(filteredList);

          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.length === 0 && <h1>No results found!</h1>}
        {filteredRestaurants.map((restaurant) => {
          return <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
           <RestaurantCard resData={restaurant} />
          </Link>
        })}
      </div>
    </div>
  );
};

export default Body;
