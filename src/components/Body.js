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
    getWhatsOnMind();
  }, []);

  async function getWhatsOnMind(){
    try{
      const res = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.4909301&lng=73.8278496&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
      if(!res.ok){
        const err = res.status;
        throw new Error(err);
      }
      else{
        const jres = await res.json();
        const coll = jres?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info;
        console.log('whats on my mind below');
        console.log(jres);
      }
    }catch(e){
        console.error(e);
    }
  }

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
      <h1 className="font-semibold text-md">Restaurants with online food delivery</h1>
      <div className="flex flex-wrap py-2">
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
