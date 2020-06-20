import React from "react";

const LoadingSpinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">Loading...</div>
    </div>
  );
};

LoadingSpinner.defaultProps = {
  message: "Loading...",
};

export default LoadingSpinner;
