import { createContext } from "react";

const RestaurantContext = createContext({
    filteredRestaurants: ["chaya"],
});

RestaurantContext.displayName = "RestaurantContext";

export default RestaurantContext;