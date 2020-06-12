import React from "react";

// react strap components
import { Button } from "reactstrap";

const App = () => {
  const buttonText = "Click Me!";

  return (
    <div>
      <label className="label" htmlFor="name">
        This is a label
      </label>
      <input id="name" type="text" />
      <Button color="primary" size="lg">
        {buttonText}
      </Button>
    </div>
  );
};

export default App;
