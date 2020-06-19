import React from "react";
import { LocationStore } from "../stores/LocationStore";

export const storesContext = React.createContext({
  locationStore: new LocationStore(),
});
