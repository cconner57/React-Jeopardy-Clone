import React from 'react';

const Question = ({ question }) => {
	return (
		<>
			<div className='block'>
				{/* <h5>{question ? 'Test' : `${question}`}</h5> */}
				<h5>{question[0].id}</h5>
			</div>
			<div className='block'>
				<h5>{question[1].id}</h5>
			</div>
			<div className='block'>
				<h5>{question[2].id}</h5>
			</div>
			<div className='block'>
				<h5>{question[3].id}</h5>
			</div>
			<div className='block'>
				<h5>{question[4].id}</h5>
			</div>
		</>
	);
};

export default Question;
// onClick={() => showQuestion(index)}
