import { useState } from "react";
import { useEffect } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";


import "./App.css";

const App = () => {
  const [values, setValues] = useState(() => {
    const savedStats = window.localStorage.getItem("stats");
    if (savedStats !== null) {
      return JSON.parse(savedStats);
    } else {
      return { good: 0, neutral: 0, bad: 0 };
    }
  });

  useEffect(() => {
    window.localStorage.setItem("stats", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {setValues({ good: 0, neutral: 0, bad: 0 });
  } else {
      setValues((prevValues) => ({
        ...prevValues,
        [feedbackType]: prevValues[feedbackType] + 1,
      }));
    }
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const positivePercent = Math.round(
    ((values.good + values.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options update={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <div className="feedback">
          <Feedback
            stats={values}
            totalFeedback={totalFeedback}
            positivePercent ={positivePercent}
          />
        </div>
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
