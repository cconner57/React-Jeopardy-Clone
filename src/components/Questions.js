import React, { useState, useContext } from 'react';
import { GameContext } from './GameContext';
import Question from './Question';

const Questions = () => {
	const [ game ] = useContext(GameContext);

	// const showQuestion = (index) => {
	// 	const newQuestion = [ ...question ];
	// 	newQuestion[index].active = true;
	// 	setQuestion(newQuestion);
	// };

	return (
		<div className="board">
			{game.map((question, index) => {
				return (
					<>
					<div className="category">
						<h5>{question[0]}</h5>
					</div>
					<Question key={index} index={index} question={question[0]} />
					</>
				);
			})}
		</div>
	);
};

export default Questions;
