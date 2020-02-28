import React, { useContext } from 'react';
import { TeamContext } from './TeamContext';

const Teams = () => {
	const [ team ] = useContext(TeamContext);
	return (
		<div className="team-container">
			{team.teams.map((team) => {
				return (
					<div className="teams">
						<h5>
							{team.team}: ${team.score}
						</h5>
					</div>
				);
			})}
		</div>
	);
};

export default Teams;
