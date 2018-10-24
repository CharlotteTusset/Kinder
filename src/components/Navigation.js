import React from 'react';

class Navigation extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-white bg-white shadow-sm">
		         <div className="collapse navbar-collapse" id="navbarSupportedContent">
		          <ul className="navbar-nav mr-auto">
		            <li className="nav-item active pl-5 kinder">kinder</li>
		            <li className="nav-item active pl-2 text-muted font-weight-light"> | </li>
		            <li className="nav-item pl-2"> organisation</li>
		          </ul>
		        </div>
		    </nav>
		);
	}
}

export default Navigation;