import React from 'react';
import LastNDetails from '../component/chart/LastNDetails';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0,
      humidity: 0,
      soilMoisture: 0,
      rain: 0,
    }
  }

  componentWillMount() {
    fetch('/api/v1/weather/today')
        .then((resp) => resp.json())
        .then((data) => {
          const success = data.success;
          if (success) {
            const feed = data.data.feeds[0];
            this.setState({
              temperature: parseInt(feed.field1),
              humidity: parseInt(feed.field2),
              soilMoisture: parseInt(feed.field3),
              rain: parseInt(feed.field4),
            });
          }
        })
        .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <h2>Today Average</h2>
        <ul>
          <li>{ 'Temperature: ' + this.state.temperature }</li>
          <li>{ 'Humidity: ' + this.state.humidity }</li>
          <li>{ 'Soil Moisture: ' + this.state.soilMoisture }</li>
          <li>{ 'Rain: ' + this.state.rain }</li>
        </ul>
        <h2>Last 100 Data Records</h2>
        <LastNDetails number={100} />
      </>
    );
  }
}