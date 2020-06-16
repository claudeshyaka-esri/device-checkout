import "./styles.css";

import React from "react";

//components
import NavBar from "./components/NavBar";
import RegionHero from "./components/RegionHero";

// react strap components

const App = () => {
  return (
    <div>
      <NavBar />
      <RegionHero
        img={process.env.PUBLIC_URL + "./one-tree.jpg"}
        alt="photo by Mitchell Luo on Unsplash"
        location="Redlands"
      />
      <RegionHero
        img={process.env.PUBLIC_URL + "./charlotte.jpg"}
        alt="photo by Wil Amani from Unsplash"
        location="Charlotte"
      />
      <RegionHero
        img={process.env.PUBLIC_URL + "./norus.jpg"}
        alt="photo by Barth Bailey from Unsplash"
        location="Norus"
      />
    </div>
  );
};

export default App;
