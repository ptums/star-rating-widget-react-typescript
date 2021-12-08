import React, { useState } from "react";
import "./StarRating.css";

const stars = [1, 2, 3, 4, 5].map((star) => ({
  id: star,
  state: false,
}));

interface Star {
  id: number;
  state: boolean;
}

const StarRatingWrapper = () => {
  const [starList, setStarList] = useState<Star[]>(stars);

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    const currendId = (e.target as HTMLInputElement).id;
    const idAsNum = parseInt(currendId);
    const modStarList = starList.map(({ state, id }) => {
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
            <span onMouseEnter={handleMouseOver} id={id.toString()}>
              ★
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default StarRatingWrapper;
