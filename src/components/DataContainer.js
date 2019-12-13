import React from 'react';
import Data from "./Data"

export default class DataContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      raceInfo: [],
    }
  }

  componentDidMount() {
    fetch("http://ergast.com/api/f1/2019.json")
      .then(response => response.json())
      .then(data => this.setState({ raceInfo: data.MRData.RaceTable.Races}));
  }

  render() {
    return(
      <Data data={this.state.raceInfo}/>
    )
  }
}
