import React, { useContext } from 'react';
import Progress from './Progress';
import { GameContext } from '../GameContext';

const QuestionInput = ({ step, nextStep }) => {
	const [game, setGame] = useContext(GameContext);
	const handleSubmit = e => {
		e.preventDefault();
		nextStep();
	};

	const handleChange = e => {
		console.log(e.target.name);
		console.log(e.target.value);
		// const { categories } = { ...game.categories };
		// const currentState = categories;
		// currentState[e.target.name] = e.target.value;
		// setGame({ categories: currentState });
		
		// setGame(prevState => ({
		// 	...prevState,
		// 	categories: {
		// 		[e.target.name]: e.target.value
		// 	}
		// }));
	};

	return (
		<form className='Form-Container' onSubmit={handleSubmit}>
			<Progress step={step - 1} />
			<div className='Input-Group'>
				<input
					className='Input-Title'
					type='text'
					name='category1'
					placeholder='Enter Category'
					value={game.categories.category1}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='question'
					placeholder='$100 Question'
					value={game.column1[0].question}
					onChange={handleChange}
				/>
				{/* <input
					type='text'
					placeholder='$100 Answer'
					onChange={e => {
						setGame(e.target.value);
					}}
				/>
				<hr />
				<input
					type='text'
					placeholder='$200 Question'
					onChange={e => {
						setGame(e.target.value);
					}}
				/>
				<input
					type='text'
					placeholder='$200 Answer'
					onChange={e => {
						setGame(e.target.value);
					}}
				/>
				<hr />
				<input
					type='text'
					placeholder='$300 Question'
					onChange={e => {
						setGame(e.target.value);
					}}
				/>
				<input
					type='text'
					placeholder='$300 Answer'
					onChange={e => {
						setGame(e.target.value);
					}}
				/>
				<hr />
				<input
					type='text'
					placeholder='$400 Question'
					onChange={e => {
						setGame(e.target.value);
					}}
				/>
				<input
					type='text'
					placeholder='$400 Answer'
					onChange={e => {
						setGame(e.target.value);
					}}
				/>
				<hr />
				<input
					type='text'
					placeholder='$500 Question'
					onChange={e => {
						setGame(e.target.value);
					}}
				/>
				<input
					type='text'
					placeholder='$500 Answer'
					onChange={e => {
						setGame(e.target.value);
					}}
				/> */}
			</div>
			<input type='submit' value='Next' />
		</form>
	);
};

export default QuestionInput;
