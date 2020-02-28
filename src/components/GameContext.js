import React, { useState, createContext } from 'react';

export const GameContext = createContext();

export const GameProvider = (props) => {
	const [ game, setGame ] = useState([
		{
			category: 'Category 1',
			text: [
				{ question: 'Tests1', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
			]
		},
		{
			category: 'Category 2',
			text: [
				{ question: 'Tests2', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
			]
		},
		{
			category: 'Category 3',
			text: [
				{ question: 'Tests3', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
			]
		},
		{
			category: 'Category 4',
			text: [
				{ question: 'Tests4', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
			]
		},
		{
			category: 'Category 5',
			text: [
				{ question: 'Tests5', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
			]
		},
		{
			category: 'Category 6',
			text: [
				{ question: 'Tests6', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
				{ question: 'Tests', answer: 'yes' },
			]
		}
	]);
	return <GameContext.Provider value={[ game, setGame ]}>{props.children}</GameContext.Provider>;
};
