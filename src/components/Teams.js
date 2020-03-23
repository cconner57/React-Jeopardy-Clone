import React, { useContext } from 'react';
import { GameContext } from './GameContext';

const Teams = () => {
	const [game] = useContext(GameContext);
	return (
		<>
			<div className='team-container'>
				<div className='teams'>
					<h5>
						{game.teams.team1.name}: ${game.teams.team1.score}
					</h5>
				</div>
				<div className='teams'>
					<h5>
						{game.teams.team2.name}: ${game.teams.team2.score}
					</h5>
				</div>
				<div className='teams'>
					<h5>
						{game.teams.team3.name}: ${game.teams.team3.score}
					</h5>
				</div>
				<div className='teams'>
					<h5>
						{game.teams.team4.name}: ${game.teams.team4.score}
					</h5>
				</div>
				{/* {game.teams.map((name,i) => (
						<div className="teams" key={i}>
							<h5>
								{name.name}: ${name.score}
							</h5>
						</div>
					))} */}
			</div>
		</>
	);
};

export default Teams;
