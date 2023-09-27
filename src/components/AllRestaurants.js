import { useContext } from 'react';
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import RestaurantContext from '../utils/RestaurantContext';


const AllRestaurants = () => {

    const { filteredRestaurants } = useContext(RestaurantContext);

    return (filteredRestaurants == undefined || filteredRestaurants?.length == 0) ? (
        <h1 className="text-gray-500 font-medium text-lg text-center m-32">
            Sorry, No restaurants available at the moment!
          </h1>
    ) : 

  (
    <>
      <h1 className="font-semibold text-lg ml-5 mt-8">
        Restaurants with online food delivery
      </h1>
      <div className="flex flex-wrap py-2">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default AllRestaurants;
