import React from "react";
import DeviceCard from "./DeviceCard";

const DeviceResultList = (props) => {
  const devices = props.devices.map((device) => {
    return (
      <div>
        <DeviceCard deviceName={device.name} />
      </div>
    );
  });
  return <div>{devices}</div>;
};

export default DeviceResultList;
