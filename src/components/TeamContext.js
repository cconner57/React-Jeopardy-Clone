import React, { useState, createContext } from 'react';

export const TeamContext = createContext();

export const TeamProvider = (props) => {
	const [ team, setTeam ] = useState({
		teams: [
			{ team: '', score: 0 },
			{ team: '', score: 0 },
			{ team: '', score: 0 },
			{ team: '', score: 0 }
		]
	});
	return <TeamContext.Provider value={[ team, setTeam ]}>{props.children}</TeamContext.Provider>;
};
