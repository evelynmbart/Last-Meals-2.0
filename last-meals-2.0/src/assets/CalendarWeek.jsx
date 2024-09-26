import { useState } from "react";

export function CalendarWeek({
  week,
  setisSurveyShown,
  isSurveyShown,
  setSelectedDateIndex,
  isMealSummaryOpen,
  setIsMealSummaryOpen,
}) {
  const days = Array(7).fill(0);

  const handleOpeningSurvey = (day) => {
    setSelectedDateIndex(day);
    setisSurveyShown(!isSurveyShown);
  };

  const colors = [
    "rgb(103, 206, 192, .70)",
    "rgb(250, 131, 52, .70)",
    "rgb(92, 177, 67, .70)",
    "rgb(234, 95, 67, .70)",
    "rgb(211, 209, 50, .70)",
    "rgb(184, 129, 211, .70)",
    "rgb(225, 111, 124, .70)",
  ];

  return (
    <>
      <div className="grid">
        {days.map((_, index) => {
          const weekOffset = week * 7;
          const dayOffset = index + 1;
          const day = weekOffset + dayOffset;

          if (day > 31) {
            return;
          }
          return (
            <div className="date-div" key={index}>
              <p>{day}</p>
              <div
                className="date-btn"
                onClick={() => setIsMealSummaryOpen(!isMealSummaryOpen)}
              >
                <button
                  style={{ backgroundColor: colors[index] }}
                  className="add-meal-btn"
                  onClick={() => handleOpeningSurvey(day)}
                >
                  Add new meal
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
