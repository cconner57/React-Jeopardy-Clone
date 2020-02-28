import React, { useContext } from 'react';
import { GameContext } from './GameContext';

const Questions = () => {
	const [ game ] = useContext(GameContext);

	const money = [ 100, 200, 300, 400, 500 ];

	return (
		<div className="board">
			{game.map((column) => {
				return (
					<div className="category">
						<h5>{column.category}</h5>
					</div>
				);
			})}
			{money.map((value) => {
				return (
					<>
					<div className="block">
						<h5>${value}</h5>
					</div>
					<div className="block">
						<h5>${value}</h5>
					</div>
					<div className="block">
						<h5>${value}</h5>
					</div>
					<div className="block">
						<h5>${value}</h5>
					</div>
					<div className="block">
						<h5>${value}</h5>
					</div>
					<div className="block">
						<h5>${value}</h5>
					</div>
					</>
				);
			})}
		</div>
	);
};

export default Questions;
