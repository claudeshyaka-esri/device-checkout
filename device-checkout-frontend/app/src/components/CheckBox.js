import React from "react";

const CheckBox = () => {
  return (
    <div className="ui form">
      <div className="grouped fields">
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="available" checked="checked" />
            <label>Available</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="checked-out" />
            <label>Checked-Out</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="all" />
            <label>All</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckBox;
