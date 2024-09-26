import { useEffect, useState } from "react";
import "./App.css";
import { CalendarWeek } from "./assets/CalendarWeek";
import { Survey } from "./assets/Survey";

function App() {
  const initialState = Array.from({ length: 32 }, (_, index) => ({
    food: "",
    meal: "",
    location: "",
    company: "",
    rating: null,
  }));
  const [surveyData, setSurveyData] = useState(
    () => JSON.parse(localStorage.getItem("surveyData")) || initialState
  );
  const [isSurveyShown, setIsSurveyShown] = useState(false);
  const [selectedDateIndex, setSelectedDateIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("surveyData", JSON.stringify(surveyData));
  }, [surveyData]);

  const dates = Array(5).fill(0);

  const getSurveyData = (dayIndex) => {
    return surveyData[dayIndex];
  };

  const setSurveyInfo = (dayIndex, newSurveyData) => {
    setSurveyData(
      surveyData.map((oldSurveyData, index) => {
        if (index === dayIndex) {
          return newSurveyData;
        } else {
          return oldSurveyData;
        }
      })
    );
  };

  const handleFormSubmit = (index, formData) => {
    setSurveyData((prevData) => {
      const newState = [...prevData];
      newState[selectedDateIndex] = formData;
      return newState;
    });
  };

  const handleSurveyClosing = (index) => {
    setIsSurveyShown(false);
  };

  return (
    <div className="main-content">
      <nav className="navbar">Last Meals</nav>
      <div className="calendar">
        <div className="weekdays">
          <h2 id="sunday">S</h2>
          <h2 id="monday">M</h2>
          <h2 id="tuesday">T</h2>
          <h2 id="wednesday">W</h2>
          <h2 id="thursday">Th</h2>
          <h2 id="friday">F</h2>
          <h2 id="saturday">S</h2>
        </div>
        {dates.map((_, index) => {
          return (
            <CalendarWeek
              key={index}
              week={index}
              setisSurveyShown={setIsSurveyShown}
              isSurveyShown={isSurveyShown}
              setSelectedDateIndex={setSelectedDateIndex}
            />
          );
        })}
        {isSurveyShown && (
          <Survey
            index={selectedDateIndex}
            surveyData={getSurveyData(selectedDateIndex)}
            setSurveyData={(newSurveyData) =>
              setSurveyInfo(selectedDateIndex, newSurveyData)
            }
            handleFormSubmit={handleFormSubmit}
            handleSurveyClosing={handleSurveyClosing}
          />
        )}
      </div>
    </div>
  );
}

export default App;
