import React, { useContext } from 'react';
import { GameContext } from './GameContext';

const Teams = () => {
	const [ game ] = useContext(GameContext);
	return (
		<>
			<div className="team-container">
				<div className="teams">
					<h5>
						{game.teams.teamNames.name1}: ${game.teams.teamNames.score1}
					</h5>
				</div>
				<div className="teams">
					<h5>
						{game.teams.teamNames.name2}: ${game.teams.teamNames.score2}
					</h5>
				</div>
				<div className="teams">
					<h5>
						{game.teams.teamNames.name3}: ${game.teams.teamNames.score3}
					</h5>
				</div>
				<div className="teams">
					<h5>
						{game.teams.teamNames.name4}: ${game.teams.teamNames.score4}
					</h5>
				</div>
			</div>
		</>
	);
};

export default Teams;
