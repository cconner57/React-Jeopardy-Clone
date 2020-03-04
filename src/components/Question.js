import React from 'react';

const Question = ({index, question, }) => {
	return (
        <>
		    <div key={index} className="block" >
			    <h5>{question[0][2] ? 'Test' : `${question[1][0]}`}</h5>
		    </div>
        </>
	);
};

export default Question;
// onClick={() => showQuestion(index)}