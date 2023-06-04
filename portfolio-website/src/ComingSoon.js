import React from "react";
import "./style/ComingSoon.css";
import Header from "./components/Header/Header";

function App() {
	return (
		<div className='body'>
			<div className='Header'>
				<Header />
			</div>
			<div className='Content'>
				<div className='ComingSoon'>
					<h1 className='ComingSoonNml'>Coming Soon.</h1>
					<h1 className='ComingSoonOtl'>Coming Soon.</h1>
					<h1 className='ComingSoonNml'>Coming Soon.</h1>
				</div>
			</div>
		</div>
	);
}

export default App;
