export function Survey({ isSurveyShown, setIsSurveyShown }) {
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
        <div>(Star rating: star icons will be here )</div>
        <button>Done</button>
      </form>
    </div>
  );
}
