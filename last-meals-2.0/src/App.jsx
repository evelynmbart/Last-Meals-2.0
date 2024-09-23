import { useState } from "react";
import "./App.css";
import { CalendarWeek } from "./assets/CalendarWeek";
import { Survey } from "./assets/Survey";

function App() {
  const [isSurveyShown, setIsSurveyShown] = useState(false);
  const [starRating, setStarRating] = useState();

  const dates = Array(5).fill(0);
  return (
    <div className="main-content">
      <div className="weekdays">
        <h2>S</h2>
        <h2>M</h2>
        <h2>T</h2>
        <h2>W</h2>
        <h2>Th</h2>
        <h2>F</h2>
        <h2>S</h2>
      </div>
      <div className="calendar">
        {dates.map((_, index) => {
          return (
            <CalendarWeek
              key={index}
              week={index}
              isSurveyShown={isSurveyShown}
              setIsSurveyShown={setIsSurveyShown}
            />
          );
        })}
        <Survey
          isSurveyShown={isSurveyShown}
          starRating={starRating}
          setStarRating={setStarRating}
        />
      </div>
    </div>
  );
}

export default App;
