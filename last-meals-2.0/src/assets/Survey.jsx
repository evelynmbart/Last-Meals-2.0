import { useState } from "react";
import { FaStar } from "react-icons/fa";

export function Survey({
  index,
  surveyData,
  setSurveyData,
  handleFormSubmit,
  handleSurveyClosing,
}) {
  const [hoverValue, setHoverValue] = useState(undefined);
  const [isOtherInputShown, setIsOtherInputShown] = useState(false);
  const [userInputAccompanied, setUserInputAccompanied] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState(surveyData);

  const handleCheckboxChange = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null); // Uncheck if already checked
    } else {
      setSelectedOption(option); // Set the new option
    }
  };

  const stars = Array(5).fill(0);

  const handleMouseClicked = (value) => {
    setFormData({ ...formData, rating: value });
  };

  const handleMouseEnter = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(index, formData);
    handleSurveyClosing();
  };

  // console.log(
  //   formData.food,
  //   formData.meal,
  //   formData.location,
  //   formData.company,
  //   formData.rating
  // );

  return (
    <div className="survey-div">
      <form onSubmit={handleSubmit}>
        <h4>{index}</h4>
        <div className="food">
          <label>What did you have to eat? </label>
          <textarea
            placeholder="I had the best veggie burger and strawberry shake..."
            value={formData.food}
            onChange={(e) => setFormData({ ...formData, food: e.target.value })}
          />
        </div>
        <div className="meal">
          <label>What meal was it? </label>
          <button
            type="button"
            className="meal-option"
            id="breakfast"
            onClick={() => setFormData({ ...formData, meal: "breakfast" })}
          >
            Breakfast
          </button>
          <button
            type="button"
            className="meal-option"
            id="brunch"
            onClick={() => setFormData({ ...formData, meal: "brunch" })}
          >
            Brunch
          </button>
          <button
            type="button"
            className="meal-option"
            id="lunch"
            onClick={() => setFormData({ ...formData, meal: "lunch" })}
          >
            Lunch
          </button>
          <button
            type="button"
            className="meal-option"
            id="dinner"
            onClick={() => setFormData({ ...formData, meal: "dinner" })}
          >
            Dinner
          </button>
          <button
            type="button"
            className="meal-option"
            id="snack"
            onClick={() => setFormData({ ...formData, meal: "snack" })}
          >
            Snack
          </button>
          <button
            type="button"
            className="meal-option"
            id="beverage"
            onClick={() => setFormData({ ...formData, meal: "beverage" })}
          >
            Beverage
          </button>
          <button
            type="button"
            className="meal-option"
            id="dessert"
            onClick={() => setFormData({ ...formData, meal: "dessert" })}
          >
            Dessert
          </button>
          <button
            type="button"
            className="meal-option"
            id="other"
            onClick={() => setIsOtherInputShown(!isOtherInputShown)}
          >
            Other
          </button>

          <input
            style={{ display: isOtherInputShown ? "block" : "none" }}
            type="text"
            onChange={(e) => setFormData({ ...formData, meal: e.target.value })}
          />
        </div>
        <div className="location">
          <label>Location: </label>
          <textarea
            className="location"
            type="text"
            placeholder="Shake Shack"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
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
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
          </div>
        </div>
        <div className="photos">
          <label className="photo-label">Want to add any photos?</label>
          <button className="add-btn" type="button">
            Add
          </button>
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
                  values={formData.rating}
                  style={{
                    color:
                      hoverValue > index ||
                      (!hoverValue && formData.rating > index)
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
            ({formData.rating} {formData.rating >= 2 ? "Stars" : "Star"})
          </p>
        </div>
        <button className="done-btn" type="submit">
          Done
        </button>
      </form>
      <button onClick={handleSurveyClosing}>Close</button>
    </div>
  );
}
