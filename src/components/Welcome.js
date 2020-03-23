import React from 'react';

const Welcome = ({ nextStep }) => {
	return (
		<div className='Welcome-Container'>
			<h1>Welcome to Jeopardy!</h1>
			<input type='button' value='Start Game' onClick={nextStep} />
			<div>
				<p>Developed with React</p>
				<p>Coded by Christopher Conner</p>
			</div>
		</div>
	);
};

export default Welcome;
