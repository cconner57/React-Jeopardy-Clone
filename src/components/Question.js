import React from 'react';

const Question = ({ index, question }) => {
	return (
		<>
			<div key={index} className='block'>
				{/* <h5>{question ? 'Test' : `${question}`}</h5> */}
				<h5>{question.question1}</h5>
			</div>
			<div key={index} className='block'>
				<h5>{question.question2}</h5>
			</div>
			<div key={index} className='block'>
				<h5>{question.question3}</h5>
			</div>
			<div key={index} className='block'>
				<h5>{question.question4}</h5>
			</div>
			<div key={index} className='block'>
				<h5>{question.question5}</h5>
			</div>
			<div key={index} className='block'>
				<h5>{question.question6}</h5>
			</div>
		</>
	);
};

export default Question;
// onClick={() => showQuestion(index)}
