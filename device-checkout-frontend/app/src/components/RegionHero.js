// this component will display a Hero for one of the Esri regions of Support Services
import React from "react";
import LazyHero from "react-lazy-hero";

const RegionHero = (props) => {
  return (
    <div>
      <LazyHero imageSrc={props.img}>
        <h3>{props.location}</h3>
      </LazyHero>
      <p>
        <i>{props.alt}</i>
      </p>
    </div>
  );
};

// const RegionHero = () => {
//   return (
//     <div className="ui segment">
//       <img class="ui image" src={process.env.PUBLIC_URL + "./one-tree.jpg"} />
//     </div>
//   );
// };

export default RegionHero;
