import React, { useState } from "react";

const Tour = ({ id, name, image, info, price, tours, setTours }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="card">
      <img src={image} alt="tour" />
      <div className="infos">
        <div className="card-header">
          <h5>{name}</h5>
          <span>$ {price}</span>
        </div>
        <p className="description">
          {isReadMore ? info.slice(0, 200) : info}
          <span onClick={toggleReadMore}>
            {isReadMore ? " Read More" : " Show Less"}
          </span>
        </p>
      </div>
      <button onClick={() => deleteTour(id)} className="btn-red">
        Not Interested
      </button>
    </div>
  );
};

export default Tour;
