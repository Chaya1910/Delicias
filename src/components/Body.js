import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../constants";
import RestaurantContext from "../utils/RestaurantContext";
import AllRestaurants from "./AllRestaurants";

const filterData = (searchInput, restaurants) => {
  return searchInput.length == ""
    ? restaurants
    : restaurants.filter((restaurant) =>
        restaurant?.info?.name
          ?.toLowerCase()
          ?.includes(searchInput.toLowerCase())
      );
};

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getRestaurants();
    // getWhatsOnMind();
  }, []);

  // async function getWhatsOnMind() {
  //   try {
  //     const res = await fetch(
  //       "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.4909301&lng=73.8278496&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
  //     );
  //     if (!res.ok) {
  //       const err = res.status;
  //       throw new Error(err);
  //     } else {
  //       const jres = await res.json();
  //       const coll =
  //         jres?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info;
  //       console.log("whats on my mind below");
  //       console.log(jres);
  //     }
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

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

        setListOfRestaurant(resData);
        setFilteredRestaurants(resData);
      }
    } catch (error) {
      console.error(error);
    }
  }

  console.log("render");

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mb-32 mt-8">
      <div className="flex justify-center items-center">
        <div className="bg-white border-2 border-gray-300 flex justify-between items-center rounded-lg">
          <input
            className="py-2 px-4 w-[500px] outline-none"
            type="text"
            placeholder="Search for restaurants and food..."
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              const data = filterData(searchInput, listOfRestaurants);
              setFilteredRestaurants(data);
              console.log(searchInput);
            }}
          />
          <button
            className="bg-orange-500 p-2 text-white font-bold"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              const data = filterData(searchInput, listOfRestaurants);
              console.log(data);
              setFilteredRestaurants(data);
            }}
          >
          Search
          </button>
        </div>
      </div>

      <RestaurantContext.Provider
        value={{ filteredRestaurants: filteredRestaurants }}
      >
        <AllRestaurants />
      </RestaurantContext.Provider>
    </div>
  );
};

export default Body;
