import React from 'react';

const Question = ({index, question, showQuestion}) => {
	return (
		<div key={index} className="block" onClick={() => showQuestion(index)}>
			<h5>{question.active ? 'Test' : `${question.money}`}</h5>
		</div>
	);
};

export default Question;
