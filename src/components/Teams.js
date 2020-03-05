import React, { useContext } from 'react';
import { GameContext } from './GameContext';

const Teams = () => {
	const [ game ] = useContext(GameContext);
	return (
		<>
			<div className="team-container">
				{game.teams.map((team) => {
					return (
						<div className="teams">
							<h5>
								{team.team}: ${team.score}
							</h5>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Teams;
