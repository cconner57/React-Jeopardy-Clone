import React, { useContext } from 'react';
import { GameContext } from './GameContext';

const Teams = () => {
	const [game] = useContext(GameContext);
	return (
		<>
			<div className='team-container'>
				<div className='teams'>
					<h5>
						{game.teams[0].name}: ${game.teams[0].score}
					</h5>
				</div>
				<div className='teams'>
					<h5>
						{game.teams[1].name}: ${game.teams[1].score}
					</h5>
				</div>
				<div className='teams'>
					<h5>
						{game.teams[2].name}: ${game.teams[2].score}
					</h5>
				</div>
				<div className='teams'>
					<h5>
						{game.teams[3].name}: ${game.teams[3].score}
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
