import { useState } from "react";
import "./App.css";
import { CalendarWeek } from "./assets/CalendarWeek";
import { Survey } from "./assets/Survey";

function App() {
  const [isSurveyShown, setIsSurveyShown] = useState(false);

  const dates = Array(5).fill(0);
  return (
    <div className="main-content">
      <div className="weekdays">
        <p>S</p>
        <p>M</p>
        <p>T</p>
        <p>W</p>
        <p>Th</p>
        <p>F</p>
        <p>S</p>
      </div>
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
      <Survey isSurveyShown={isSurveyShown} />
    </div>
  );
}

export default App;
