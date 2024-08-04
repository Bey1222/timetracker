import React from "react";

const TimeframeSelector = ({ activeTimeframe, onTimeframeChange }) => {
  const timeframes = ["daily", "weekly", "monthly"];

  return (
    <div className="timeframe-selector">
      {timeframes.map((timeframe) => (
        <button
          key={timeframe}
          className={`timeframe-button ${
            activeTimeframe === timeframe ? "active" : ""
          }`}
          onClick={() => onTimeframeChange(timeframe)}
        >
          {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TimeframeSelector;
