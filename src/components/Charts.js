import React from 'react';
import {Doughnut} from 'react-chartjs-2';

class Charts extends React.Component {

	// Function to add clicks on charts
	chartClick(){
		this.props.editChart(this.props.id)
	}

	render() {
		let smallChartsData = {
			labels: [""],
			datasets: [
					{
						label: "clicks",
						data: [this.props.chart.value],
						backgroundColor: [this.props.chart.color],
						borderColor: '#f8f9fa',
					}
				],
			}
		return (
			<div className="col-sm-3 chart">
				<div className="card" onClick={()=>this.chartClick()}>
				  <div className="card-body">
				    <h5 className="card-title text-center">{this.props.chart.name}</h5>
				    <div className="chart-container">
					    <Doughnut data={smallChartsData}/>
					</div>
				  </div>
				</div>
			</div>
		);
	}
}

export default Charts;