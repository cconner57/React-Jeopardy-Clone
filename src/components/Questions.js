import React, { useContext } from 'react';
import { GameContext } from './GameContext';
import Question from './Question';

const Questions = () => {
	const [game] = useContext(GameContext);

	// const showQuestion = (index) => {
	// 	const newQuestion = [ ...question ];
	// 	newQuestion[index].active = true;
	// 	setQuestion(newQuestion);
	// };

	return (
		<>
		<div className='board'>
			<div className='category'>
				<h5>{game.questions.set1.category}</h5>
			</div>
			<Question question={game.score} />
		</div>
		<div className='board'>
			<div className='category'>
				<h5>{game.questions.set2.category}</h5>
			</div>
			<Question question={game.score} />
		</div>
		<div className='board'>
			<div className='category'>
				<h5>{game.questions.set3.category}</h5>
			</div>
			<Question question={game.score} />
		</div>
		<div className='board'>
			<div className='category'>
				<h5>{game.questions.set4.category}</h5>
			</div>
			<Question question={game.score} />
		</div>
		<div className='board'>
			<div className='category'>
				<h5>{game.questions.set5.category}</h5>
			</div>
			<Question question={game.score} />
		</div>
		<div className='board'>
			<div className='category'>
				<h5>{game.questions.set6.category}</h5>
			</div>
			<Question question={game.score} />
		</div>
			{/* <Question key={index} index={index} question={score} /> */}
		</>
	);
};

export default Questions;
