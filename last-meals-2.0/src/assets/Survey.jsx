import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

export function Survey({ isSurveyShown }) {
  const [hoverValue, setHoverValue] = useState(undefined);

  const [isOtherInputShown, setIsOtherInputShown] = useState(false);
  const [userInputOther, setUserInputOther] = useState("");
  const [userInputAccompanied, setUserInputAccompanied] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [surveyData, setSurveyData] = useState({
    food: "",
    meal: "",
    location: "",
    company: "",
    rating: null,
  });

  const handleCheckboxChange = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null); // Uncheck if already checked
    } else {
      setSelectedOption(option); // Set the new option
    }
  };

  const stars = Array(5).fill(0);

  const handleMouseClicked = (value) => {
    setSurveyData({ ...surveyData, rating: value });
  };

  const handleMouseEnter = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(
    surveyData.food,
    surveyData.meal,
    surveyData.location,
    surveyData.company,
    surveyData.rating
  );

  return (
    <div
      className="survey-div"
      style={{ display: isSurveyShown ? "block" : "none" }}
    >
      <form onSubmit={handleSubmit}>
        <div className="food">
          <label>What did you eat? </label>
          <textarea
            placeholder="I had the best veggie burger and strawberry shake..."
            value={surveyData.food}
            onChange={(e) =>
              setSurveyData({ ...surveyData, food: e.target.value })
            }
          />
        </div>
        <div className="meal">
          <label>What meal was it? </label>
          <button
            className="meal-option"
            id="breakfast"
            onClick={() => setSurveyData({ ...surveyData, meal: "Breakfast" })}
          >
            Breakfast
          </button>
          <button
            className="meal-option"
            id="brunch"
            onClick={() => setSurveyData({ ...surveyData, meal: "Brunch" })}
          >
            Brunch
          </button>
          <button
            className="meal-option"
            id="lunch"
            onClick={() => setSurveyData({ ...surveyData, meal: "Lunch" })}
          >
            Lunch
          </button>
          <button
            className="meal-option"
            id="dinner"
            onClick={() => setSurveyData({ ...surveyData, meal: "Dinner" })}
          >
            Dinner
          </button>
          <button
            className="meal-option"
            id="snack"
            onClick={() => setSurveyData({ ...surveyData, meal: "Snack" })}
          >
            Snack
          </button>
          <button
            className="meal-option"
            id="beverage"
            onClick={() => setSurveyData({ ...surveyData, meal: "Beverage" })}
          >
            Beverage
          </button>
          <button
            className="meal-option"
            id="dessert"
            onClick={() => setSurveyData({ ...surveyData, meal: "Dessert" })}
          >
            Dessert
          </button>
          <button
            className="meal-option"
            id="other"
            onClick={() => setIsOtherInputShown(!isOtherInputShown)}
          >
            Other
          </button>

          <input
            style={{ display: isOtherInputShown ? "block" : "none" }}
            type="text"
            onChange={(e) =>
              setSurveyData({ ...surveyData, meal: e.target.value })
            }
          />
        </div>
        <div className="location">
          <label>Location: </label>
          <textarea
            className="location"
            type="text"
            placeholder="Shake Shack"
            value={surveyData.location}
            onChange={(e) =>
              setSurveyData({ ...surveyData, location: e.target.value })
            }
          />
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
            <label>Who? </label>
            <input
              type="text"
              placeholder="my parents..."
              className="with-who"
              value={surveyData.company}
              onChange={(e) =>
                setSurveyData({ ...surveyData, company: e.target.value })
              }
            />
          </div>
        </div>
        <div className="photos">
          <label className="photo-label">Want to add any photos?</label>
          <button className="add-btn">Add</button>
          <button className="photo-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSI24FqEs8bdQfA1gCZD3Ar2qu8hT_030Vv6YTfAl7HG-8uadoX7Pby2QfKtIdiLPjLY&usqp=CAU" />
          </button>
        </div>
        <div className="star-rating">
          <div className="star-info">
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  className="star"
                  size={24}
                  values={surveyData.rating}
                  style={{
                    color:
                      hoverValue > index ||
                      (!hoverValue && surveyData.rating > index)
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
            ({surveyData.rating} {surveyData.rating >= 2 ? "Stars" : "Star"})
          </p>
        </div>
        <button className="done-btn">Done</button>
      </form>
    </div>
  );
}
