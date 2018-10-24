import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';

// Do not display legends Chartjs-2
defaults.global.legend.display = false;

class MainChart extends React.Component {
	render() {
		let chartData = {
			labels: this.props.name,
			datasets: [
				{
					label: "Total charts",
					data: this.props.value,
					backgroundColor: this.props.color,
					borderColor: '#f8f9fa',
				}
			],
			options: [{cutoutPercentage: 100}]
		}	
		return (
			<div className='chart'>
			   <div className="mt-4 mb-4 mr-0 ml-0 pt-3 text-uppercase font-weight-light text-secondary text-center">Your overall score</div>
			   <Doughnut 
			   	 data={chartData}
			   	 height={50}
          		 width={200}
			   />
			</div>
		);
	}
}

export default MainChart;