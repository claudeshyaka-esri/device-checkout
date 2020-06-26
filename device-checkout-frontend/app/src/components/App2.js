import React from "react";
import axios from "axios";

import "./App2.css";

//components
import NavBar from "./NavBar";
import DeviceResultList from "./DeviceResultList";
import LoadingSpinner from "./LoadingSpinner";
import Search from "./Search";

class App2 extends React.Component {
  state = {
    devices: [],
    loading: false,
  };

  // load the devices from the initial query
  componentDidMount = () => {
    const url = process.env.PUBLIC_URL + "./devicesTestData.json";

    // set the loader spinner while querying
    this.setState({ loading: true }, () => {
      axios.get(url).then((results) => {
        console.log(results.data);
        if (results.data.length > 0) {
          this.setState({
            devices: results.data,
            loading: false,
          });
        } else {
          console.log("no device data!");
        }
      });
    });
  };

  render() {
    const { devices, loading } = this.state;

    return (
      <div>
        <NavBar />
        <div className="ui segment">
          <div style={{ marginLeft: "10%" }}>
            <Search />
          </div>
        </div>
        <div className="result-container">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <DeviceResultList devices={devices} />
          )}
        </div>
      </div>
    );
  }
}

export default App2;
