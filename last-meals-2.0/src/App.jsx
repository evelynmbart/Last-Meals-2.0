import { useState } from "react";
import "./App.css";
import { Calendar } from "./assets/Calendar";
import { Survey } from "./assets/Survey";

function App() {
  const [isSurveyShown, setIsSurveyShown] = useState(false);
  return (
    <div className="main-content">
      <Calendar
        isSurveyShown={isSurveyShown}
        setIsSurveyShown={setIsSurveyShown}
      />
      <Survey
        isSurveyShown={isSurveyShown}
        setIsSurveyShown={setIsSurveyShown}
      />
    </div>
  );
}

export default App;
