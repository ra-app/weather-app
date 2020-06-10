import { useEffect } from 'react';
import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faCloud,
//   faBolt,
//   faCloudRain,
//   faCloudShowersHeavy,
//   faSnowflake,
//   faSun,
//   faSmog,
// } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import device from '../Responsive/Device';
// import ForecastHour from './ForecastHour';
import BigLabel from './BigLabel';
import MediumLabel from './MediumLabel';
import SmallLabel from './SmallLabel';
import Text from './Text';
import convert from 'convert-units';
import Chart from 'chart.js';

const Results = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 0;
  opacity: 1;
  visibility: visible;
  position: relative;
  top: 20px;
`;

const WeatherDetailsWrapper = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  margin: 20px 0;
  background-color: rgba(25, 25, 25, 0.45);
  border-radius: 10px;
  align-self: flex-start;
  @media ${device.mobileL} {
    flex-basis: 100%;
  }
`;

const WeatherDetail = styled.div`
  flex-basis: calc(100% / 3);
  padding: 10px;
  @media ${device.laptop} {
    padding: 20px 10px;
  }
`;

const MainChartsDiv = styled.div`
width: 100%;
display: flex;
scrollbar-width: thin;
margin-top: 20px;
padding-bottom: 20px;
background-color: rgba(25,25,25,0.45);
border-radius: 5px;
@media ${device.laptop} {
  order: 4;
}
`;

const DivChart = styled.div`
margin-right: 15px;
width: calc(50% - 30px)
`;

const Result = () => {
  let powerData;
  const getPowerData = async() =>{
    fetch('http://192.168.1.38:5050/livedata', {method: "GET"})
     .then((response) => response.json())
     .then((responseData) =>
     {  
      window.$powerData = responseData;
      //console.log(powerData, 'powerData!!!');
     })
     .catch((error) => {
         console.error(error);
     });
   
   }

  const setDataChart = () => {
    const daily = document.getElementById('daily').getContext("2d");
    const weekly = document.getElementById('weekly').getContext("2d");
    const monthly = document.getElementById('monthly').getContext("2d");
    const yearly = document.getElementById('yearly').getContext("2d");
    const total = document.getElementById('total').getContext("2d");

    buildChart(daily, buildDataChart('daily'), buildTitle('daily'));
    buildChart(weekly, buildDataChart('weekly'), buildTitle('weekly'));
    buildChart(monthly, buildDataChart('monthly'), buildTitle('monthly'));
    buildChart(yearly, buildDataChart('yearly'), buildTitle('yearly'));
    buildChart(total, buildDataChart('total'), buildTitle('total'));

 
  }

  const buildDataChart = (chart) => {
    const dataChart = {
      labels: [ 'Green', 'Purple', 'Orange'],
      datasets: [{
          data: [12, 19, 33],
          backgroundColor: [
              'rgba(75, 192, 192)',
              'rgba(153, 102, 255)',
              'rgba(255, 159, 64)'
          ],
          borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
    }

    switch(chart){
      case 'daily':
        dataChart.datasets[0].data = [12, 20, 50];
        return dataChart
      case 'weekly':
        dataChart.datasets[0].data = [20, 29, 40];
        return dataChart
      case 'monthly':
        dataChart.datasets[0].data = [30, 40, 50];
        return dataChart
      case 'yearly':
        dataChart.datasets[0].data = [50, 60, 70];
        //dataChart.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        return dataChart
      case 'total':
        dataChart.datasets[0].data = [80, 90, 100];
        return dataChart
    }

  }

  const buildTitle = (chart) => {
    const titleChart = {
      display: true,
      text: '',
      position: 'top',
      fontSize: 20,
      fontColor: 'rgb(255, 255, 255)',
    }
    
    switch(chart){
      case 'daily':
        titleChart.text = 'Daily';
        return titleChart
      case 'weekly':
        titleChart.text = 'Weekly';
        return titleChart
      case 'monthly':
        titleChart.text = 'Monthly';
        return titleChart
      case 'yearly':
        titleChart.text = 'Yearly';
        return titleChart
      case 'total':
        titleChart.text = 'Total';
        return titleChart
    }
  }

  const buildChart = (chartToBuild, data, chartTitle) =>{
    
    Chart.pluginService.register({
			beforeDraw: function (chart, easing) {
				if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
					var helpers = Chart.helpers;
					var ctx = chart.chart.ctx;
					var chartArea = chart.chartArea;

					ctx.save();
					ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
					ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
					ctx.restore();
				}
			}
    });
    const config =  {

      type: 'bar',
      data: data,
      options: {
        legend: {
          display: false,
          labels: {
              fontColor: 'rgb(255, 255, 255)',
              fontSize: 16
          },
        },
        title: chartTitle,
        scales: {
          yAxes: [{
            type: 'linear',
            position: 'left',
            stepSize: 5,
            fontColor: '#ffffff',
            display: true,
          }],
          xAxes: [{
            fontColor: 'rgb(255, 255, 255)',
          }]
        },
        responsive: true,
        chartArea: {

        }
      },
    }
    new Chart(chartToBuild, config);
  }

  useEffect(() => {    
    //setDataChart();
    getPowerData()
    setInterval(()=> getPowerData(), 500)
  });

  
  console.log('HEREEE WTF ', window.$powerData)
  return (
    <Results>
      { window.$powerData &&
      <WeatherDetailsWrapper>
        <WeatherDetail>
          <SmallLabel align="center" weight="400">
           {convert(window.$powerData.data.power_dc1 + window.$powerData.data.power_dc2).from('W').to('kW').toFixed(3)} kW
          </SmallLabel>
          <Text align="center">PV Power</Text>
        </WeatherDetail>
        <WeatherDetail>
          <SmallLabel align="center" weight="400">
          {convert(window.$powerData.data.home_own_consumption_from_battery + window.$powerData.data.home_own_consumption_from_grid + window.$powerData.data.home_own_consumption_from_pv).from('W').to('kW').toFixed(3)} kW
          </SmallLabel>
          <Text align="center">Consumption</Text>
        </WeatherDetail>
        <WeatherDetail>
          <SmallLabel align="center" weight="400">
          {window.$powerData.data.act_state_of_charge}%
          </SmallLabel>
          <Text align="center">Battery</Text>
        </WeatherDetail>
        <WeatherDetail>
          <SmallLabel align="center" weight="400">
          2827 kWh
          </SmallLabel>
          <Text align="center">Today's export</Text>
        </WeatherDetail>
        <WeatherDetail>
          <SmallLabel align="center" weight="400">
          0.75 kWh
          </SmallLabel>
          <Text align="center">Today's import</Text>
        </WeatherDetail>
        <WeatherDetail>
          <SmallLabel align="center" weight="400">
          427 €
          </SmallLabel>
          <Text align="center">Current year earnings</Text>
        </WeatherDetail>
      </WeatherDetailsWrapper>
}
     {/*  <MainChartsDiv>
        <DivChart>
          <canvas id="daily" height="200" width="200" ></canvas>
        </DivChart>
        <DivChart>
          <canvas id="weekly" height="200" width="200" ></canvas>
        </DivChart>
        <DivChart>
          <canvas id="monthly" height="200" width="200"></canvas>
        </DivChart>
        <DivChart>
          <canvas id="yearly" height="200" width="200"></canvas>
        </DivChart>
        <DivChart>
          <canvas id="total" height="200" width="200"></canvas>
        </DivChart>
      </MainChartsDiv> */}
    </Results>
  );
};
export default Result;
