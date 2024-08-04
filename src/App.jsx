import React, { useState } from "react";
import Header from "./Components/Header";
import Card from "./Components/Card";
import TimeframeSelector from "./Components/TimeframeSelector";
import timeframesData from "./timeframes";
import image from "./assets/megumi.jpg";

const App = () => {
  const [activeTimeframe, setActiveTimeframe] = useState("daily");

  const handleTimeframeChange = (timeframe) => {
    setActiveTimeframe(timeframe);
  };

  return (
    <div className="app">
      <Header image={image} />
      <TimeframeSelector
        activeTimeframe={activeTimeframe}
        onTimeframeChange={handleTimeframeChange}
      />
      <div className="cards-container">
        {timeframesData.map((data, index) => (
          <Card key={index} data={data} activeTimeframe={activeTimeframe} />
        ))}
      </div>
    </div>
  );
};

export default App;
