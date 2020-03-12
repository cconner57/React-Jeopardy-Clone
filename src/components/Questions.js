import React, { useContext } from 'react';
import { GameContext } from './GameContext';
import Question from './Question'

const Questions = () => {
	const [ game ] = useContext(GameContext);

	// const showQuestion = (index) => {
	// 	const newQuestion = [ ...question ];
	// 	newQuestion[index].active = true;
	// 	setQuestion(newQuestion);
	// };

	return (
		<div className="board">
			<div className="category">
				<h5>{game.categories.category1}</h5>
			</div>
			<div className="category">
				<h5>{game.categories.category2}</h5>
			</div>
			<div className="category">
				<h5>{game.categories.category3}</h5>
			</div>
			<div className="category">
				<h5>{game.categories.category4}</h5>
			</div>
			<div className="category">
				<h5>{game.categories.category5}</h5>
			</div>
			<div className="category">
				<h5>{game.categories.category6}</h5>
			</div>
			{/* <Question key={index} index={index} question={score} /> */}
			<Question question={game.questions.set1} />
		</div>
	);
};

export default Questions;
