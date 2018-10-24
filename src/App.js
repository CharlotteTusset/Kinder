import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Button from './components/Button';
import MainChart from './components/MainChart';
import Charts from './components/Charts';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      charts: [
        {name: "Strategy", value: 1, color: "#34cd73"},
        {name: "Program Execution", value: 1, color: "#29bb7c"},
        {name: "Sector Research", value: 1, color: "#1fab86"},
        {name: "Ethics", value: 1, color: "#11998d"},
      ]
    }
  }

  // Function to increment the main chart 
  editChart(chartId){
    let newChart = this.state.charts;
    newChart[chartId].value = newChart[chartId].value + 1;
    this.setState({charts: newChart});
  }

  // Function to reset charts (does not work!)
  resetAll(chartId){
    let resetChart = this.state.charts;
    resetChart[chartId].value = 0;
    this.setState({charts: resetChart});
  }

  render() {

    let name = [];
    let color = [];
    let value = [];
    this.state.charts.map((chart)=>{
      name.push(chart['name']);
      color.push(chart['color']);   
      value.push(chart['value']);
    })

    return (
      <div className="bg-light">
        <Navigation />
        <div className="container bg-white shadow-sm rounded">
          <MainChart
            name={name}
            color={color}
            value={value}
          />
          <div className="row mt-5">
            {this.state.charts.map((chart, index)=>{
              return(
                <Charts key={index} chart={chart} id={index} editChart={this.editChart.bind(this)}
                resetAll={this.resetAll.bind(this)}/> 
              )
            })}
          </div>
          <Button/>
        </div>
      </div>
    );
  }
}

export default App;
