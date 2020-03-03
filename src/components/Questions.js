import React, { useState, useContext } from 'react';
import { GameContext } from './GameContext';
import Question from './Question';

const Questions = () => {
	const [ question, setQuestion ] = useState([
		{
			money: 100,
			active: false
		},
		{
			money: 200,
			active: false
		},
		{
			money: 300,
			active: false
		},
		{
			money: 400,
			active: false
		},
		{
			money: 500,
			active: false
		}
	]);
	const [ game ] = useContext(GameContext);

	const showQuestion = (index) => {
		const newQuestion = [ ...question ];
		newQuestion[index].active = true;
		setQuestion(newQuestion);
	};

	return (
		<div className="board">
			{game.map((column) => {
				return (
					<div className="category">
						<h5>{column.category}</h5>
					</div>
				);
			})}
			{question.map((quest, index) => {
				<Question key={index} index={index} question={quest} showQuestion={showQuestion} />
				<Question key={index} index={index} question={quest} showQuestion={showQuestion} />
				<Question key={index} index={index} question={quest} showQuestion={showQuestion} />
				<Question key={index} index={index} question={quest} showQuestion={showQuestion} />
				<Question key={index} index={index} question={quest} showQuestion={showQuestion} />
})}
		</div>
	);
};

export default Questions;
