import React from 'react';
import Data from "./Data"

export default class DataContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      raceInfo: [],
      drivers: [],
      isLoading: true
    }
  }

  componentDidMount() {
    fetch("http://ergast.com/api/f1/2019.json")
      .then(response => response.json())
      .then(data => this.setState({ 
        raceInfo: data.MRData.RaceTable.Races,
      }));

    fetch("http://ergast.com/api/f1/2019/drivers.json")
      .then(response => response.json())
      .then(data => this.setState({ 
        drivers: data.MRData.DriverTable.Drivers,
      }));

    fetch("http://ergast.com/api/f1/2019/constructors.json")
      .then(response => response.json())
      .then(data => this.setState({ 
        drivers: data.MRData.ConstructorTable.Constructors,
        isLoading: false,
      }));
  }

  render() {
    return(
      <Data data={this.state}/>
    )
  }
}
