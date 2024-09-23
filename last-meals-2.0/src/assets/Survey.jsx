import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

export function Survey({ isSurveyShown, starRating, setStarRating }) {
  const [hoverValue, setHoverValue] = useState(undefined);
  const [isOtherInputShown, setIsOtherInputShown] = useState(false);
  const [userInputOther, setUserInputOther] = useState("");
  const [userInputAccompanied, setUserInputAccompanied] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null); // Uncheck if already checked
    } else {
      setSelectedOption(option); // Set the new option
    }
  };

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

  return (
    <div
      className="survey-div"
      style={{ display: isSurveyShown ? "block" : "none" }}
    >
      <form>
        <div className="food">
          <label>What did you eat? </label>
          <textarea placeholder="I had the best veggie burger and strawberry shake..." />
        </div>
        <div className="meal">
          <label>What meal was it? </label>
          <input
            className="meal-option"
            id="breakfast"
            type="button"
            value="Breakfast"
          />
          <input
            className="meal-option"
            id="brunch"
            type="button"
            value="Brunch"
          />
          <input
            className="meal-option"
            id="lunch"
            type="button"
            value="Lunch"
          />
          <input
            className="meal-option"
            id="dinner"
            type="button"
            value="Dinner"
          />
          <input
            className="meal-option"
            id="snack"
            type="button"
            value="Snack"
          />
          <input
            className="meal-option"
            id="beverage"
            type="button"
            value="Beverage"
          />
          <input
            className="meal-option"
            id="dessert"
            type="button"
            value="Dessert"
          />
          <input
            className="meal-option"
            id="other"
            type="button"
            value="Other"
            onClick={() => setIsOtherInputShown(!isOtherInputShown)}
          />
          <input
            style={{ display: isOtherInputShown ? "block" : "none" }}
            type="text"
            onChange={(e) => setUserInputOther(e.target.value)}
          />
        </div>
        <div className="location">
          <label>Location? </label>
          <input className="location" type="text" placeholder="Shake Shack" />
        </div>
        <div className="accompanied">
          <div className="with-company">
            <label>With company? Yes</label>
            <input
              type="checkbox"
              checked={selectedOption === "yes"}
              onChange={() => handleCheckboxChange("yes")}
              onClick={() => setUserInputAccompanied(!userInputAccompanied)}
            />
            <label>No</label>
            <input
              type="checkbox"
              checked={selectedOption === "no"}
              onChange={() => handleCheckboxChange("no")}
              onClick={() => setUserInputAccompanied(false)}
            />
          </div>
          <div
            style={{ display: userInputAccompanied ? "block" : "none" }}
            className="who"
          >
            <label>Who?</label>
            <input
              type="text"
              placeholder="my parents..."
              className="with-who"
            />
          </div>
        </div>
        <div className="star-rating">
          <div className="star-info">
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
          </div>
          <p className="stars">
            ({starRating} {starRating >= 2 ? "Stars" : "Star"})
          </p>
        </div>
        <button className="done-btn">Done</button>
      </form>
    </div>
  );
}
