import React, { useState, createContext } from 'react';

export const TeamContext = createContext();

export const TeamProvider = (props) => {
	const [ team, setTeam ] = useState({
		teams: [
			{ team: 'Name 1', score: 0 },
			{ team: 'Name 2', score: 0 },
			{ team: 'Name 3', score: 0 },
			{ team: 'Name 4', score: 0 }
		]
	});
	return <TeamContext.Provider value={[ team, setTeam ]}>{props.children}</TeamContext.Provider>;
};
