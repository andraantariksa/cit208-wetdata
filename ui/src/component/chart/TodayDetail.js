import React from 'react';
import {Line} from 'react-chartjs-2';

export default class TodayDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [],
        datasets: [{
          label: 'Temperature',
          data: [],
          fill: false,
        },
        {
          label: 'Humidity',
          data: [],
        },
        {
          label: 'Soil Moisture',
          data: [],
        },
        {
          label: 'Rain',
          data: [],
        }],
      }
    };
  }

  componentDidMount() {
    // this.data = {
    //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //   datasets: [
    //     {
    //       label: 'Rain',
    //       data: [65, 59, 80, 81, 56, 55, 40]
    //     }
    //   ]
    // };
    const tempData = {
      labels: [],
      datasets: [{
        label: 'Temperature',
        data: [],
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
      {
        label: 'Humidity',
        data: [],
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(233,30,99,0.4)',
        borderColor: 'rgba(233,30,99,0.4)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(233,30,99,0.4)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(233,30,99,0.4)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
      {
        label: 'Soil Moisture',
        data: [],
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(255,87,34,0.4)',
        borderColor: 'rgba(255,87,34,0.4)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(255,87,34,0.4)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(255,87,34,0.4)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
      {
        label: 'Rain',
        data: [],
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(158,158,158,0.4)',
        borderColor: 'rgba(158,158,158,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(158,158,158,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(158,158,158,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      }],
    };

    fetch('/api/v1/weather/today')
        .then((resp) => resp.json())
        .then((data) => {
          const success = data.success;
          if (success) {
            data.data.feeds.forEach((feed) => {
              tempData.labels.push(feed.created_at);
              tempData.datasets[0].data.push(parseInt(feed.field1));
              tempData.datasets[1].data.push(parseInt(feed.field2));
              tempData.datasets[2].data.push(parseInt(feed.field3));
              tempData.datasets[3].data.push(parseInt(feed.field4));
            });
            console.log(`set state`, tempData);
            this.setState({
              data: tempData
            });
          }
        })
        .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <Line data={this.state.data} />
      </>
    );
  }
};
