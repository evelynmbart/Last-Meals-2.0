export function CalendarWeek({
  week,
  setisSurveyShown,
  isSurveyShown,
  setSelectedDateIndex,
}) {
  const days = Array(7).fill(0);

  const handleOpeningSurvey = (day) => {
    setSelectedDateIndex(day);
    setisSurveyShown(!isSurveyShown);
  };

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
              <button
                className="date-btn"
                onClick={() => handleOpeningSurvey(day)}
              ></button>
            </div>
          );
        })}
      </div>
    </>
  );
}
