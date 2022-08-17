import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, setTours }) => {
  return <>
    {tours.map((tour) => {
      return <Tour key={tour.id} tours={tours} {...tour} setTours={setTours}/>
    })}
  </>;
};

export default Tours;
