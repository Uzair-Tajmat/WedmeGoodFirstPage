import { createContext, useReducer } from "react";

export const PopularVenueContext = createContext({
  popularVenue: [
    {
      type: "4 Star and Above Wedding",
      img_link:
        "https://media.geeksforgeeks.org/img-practice/banner/complete-interview-preparation-thumbnail.png?v=19631",
    },
    {
      type: "Banquet Halss",
      img_link: "",
    },
  ],
});
