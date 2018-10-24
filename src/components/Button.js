import React from 'react';

class Button extends React.Component {

	// Function to add clicks on charts
	resetClick(){
		this.props.resetAll(this.props.id)
	}

	render() {
		return (
			<div className="text-center">
				<button type="button" className="btn mt-3 mb-3 pl-2 pr-2 center" 
				onClick={()=>this.resetClick()}>Reset all graphs</button>
			</div>
		);
	}
}

export default Button;