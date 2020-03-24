import React, { useContext } from 'react';
import Progress from './Progress';
import { GameContext } from '../GameContext';

const QuestionInput = ({ step, nextStep }) => {
	const [game, setGame] = useContext(GameContext);
	const next = e => {
		e.preventDefault();
		// setGame({ [input]: e.target.value });
		nextStep();
	};

	return (
		<form className='Form-Container' onSubmit={next}>
			<Progress step={step - 1} />
			<div className='Input-Group'>
				<input
					className='Input-Title'
					type='text'
					placeholder={game.questions.set1.category}
					onChange={e => {
						setGame( e.target.value);
					}}
				/>
				{/* <input
					type='text'
					placeholder='$100 Question'
					onChange={e => {
						setGame(e.target.value);
					}}
				/>
				<input
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
