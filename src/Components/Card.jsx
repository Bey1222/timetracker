import React from "react";

const Card = ({ data, activeTimeframe }) => {
  const { title, timeframes } = data;
  const currentTimeframe = timeframes[activeTimeframe];

  return (
    <div className="card">
      <div className={`card-icon card-icon-${title}`}>
        {/* You can add an icon or image here based on the title */}
      </div>
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        <div className="current">{currentTimeframe.current}hrs</div>
        <div className="previous">
          Last {activeTimeframe} - {currentTimeframe.previous}hrs
        </div>
      </div>
    </div>
  );
};

export default Card;
