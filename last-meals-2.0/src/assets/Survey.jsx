import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

export function Survey({ isSurveyShown }) {
  const [starRating, setStarRating] = useState();
  const [hoverValue, setHoverValue] = useState(undefined);

  const stars = Array(5).fill(0);

  const handleMouseClicked = (value) => {
    setStarRating(value);
  };

  const handleMouseEnter = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  console.log(hoverValue, starRating);

  return (
    <div
      className="survey-div"
      style={{ display: isSurveyShown ? "block" : "none" }}
    >
      <form>
        <div>
          <label>What did you eat? </label>
          <textarea />
        </div>
        <div>
          <label>What meal was it? </label>
          <input type="button" value="Breakfast" />
          <input type="button" value="Brunch" />
          <input type="button" value="Lunch" />
          <input type="button" value="Dinner" />
          <input type="button" value="Snack" />
          <input type="button" value="Beverage" />
          <input type="button" value="Dessert" />
          <input type="button" value="Other" />
        </div>
        <div>
          <label>Location? </label>
          <input type="text" />
        </div>
        <div>
          <label>With company? </label>
          Yes
          <input type="checkbox" />
          No
          <input type="checkbox" />
        </div>
        <div className="star-rating">
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                className="star"
                size={24}
                style={{
                  color:
                    hoverValue > index || (!hoverValue && starRating > index)
                      ? "#f2c265"
                      : "#a9a9a9",
                }}
                onClick={() => handleMouseClicked(index + 1)}
                onMouseOver={() => handleMouseEnter(index + 1)}
                onMouseLeave={() => handleMouseLeave()}
              />
            );
          })}
          <p>
            ({starRating} {starRating >= 2 ? "Stars" : "Star"})
          </p>
        </div>

        <button>Done</button>
      </form>
    </div>
  );
}
