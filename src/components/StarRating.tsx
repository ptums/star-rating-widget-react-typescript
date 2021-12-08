import React, { useState } from "react";
import "./StarRating.css";

/** type def for the rating star */
interface Star {
  id: number;
  state: boolean;
}

/** Default star ratings array state */
const stars = [1, 2, 3, 4, 5].map((star):Star => ({
  id: star,
  state: false,
}));

const StarRatingWrapper = () => {
  const [starList, setStarList] = useState<Star[]>(stars);


  /** Mouse over event handler to toggle between the star states */
  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    const currendId = (e.target as HTMLInputElement).id;
    const idAsNum = parseInt(currendId);
    
    /** Map through the star list and mutate the state of the star based on its id and current state */
    const modStarList = starList.map(({ state, id }: Star) => {
      if (id <= idAsNum && state === false) {
        return {
          id,
          state: true,
        };
      }

      if (id >= idAsNum && state === true) {
        return {
          id,
          state: false,
        };
      }

      return {
        id,
        state,
      };
    });

    /** Set the results of the map as the new state */
    setStarList(modStarList);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {starList.map(({ id, state }) => (
        <div key={id} className="star-box">
          {!state ? (
            <div onMouseEnter={handleMouseOver} id={id.toString()}>
              ☆
            </div>
          ) : (
            <div onMouseEnter={handleMouseOver} id={id.toString()}>
              ★
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StarRatingWrapper;
