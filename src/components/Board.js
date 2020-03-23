import React from 'react';

import Teams from './Teams';
import Questions from './Questions';
import { GameProvider } from './GameContext';

const Board = () => {
	// const revealQuestion = () => {
	// 	document.style.display = 'none';
	// 	document.style.display = 'block';
	// };

	return (
		<div className='Board-Container'>
			<h1>Jeopardy</h1>
			<GameProvider>
				<Teams />
				<Questions />
			</GameProvider>
		</div>
	);
};

export default Board;
