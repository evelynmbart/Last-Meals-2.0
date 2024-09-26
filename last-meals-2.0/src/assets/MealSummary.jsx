export function MealSummary({ surveyData }) {
  console.log(surveyData);
  return (
    <div className="summary-content">
      <div>You had: {surveyData.food}</div>
      <div>For: {surveyData.meal}</div>
      <div>At: {surveyData.location}</div>
      <div>With:{surveyData.company}</div>
      <div>You rated it: {surveyData.rating} stars</div>
      <div>Here are the photos!</div>
    </div>
  );
}
