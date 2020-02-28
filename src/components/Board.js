import React from 'react';

import Teams from './Teams';
import Questions from './Questions';
import { GameProvider } from './GameContext';
import { TeamProvider } from './TeamContext';

function Board() {
	// const revealQuestion = () => {
	// 	document.style.display = 'none';
	// 	document.style.display = 'block';
	// };

	return (
		<div className="container">
			<h1>Jeopardy</h1>
			<TeamProvider>
				<Teams />
			</TeamProvider>
			<GameProvider>
				<Questions />
			</GameProvider>
		</div>
	);
}

export default Board;
