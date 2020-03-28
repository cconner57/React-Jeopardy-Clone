import React, { useState, createContext } from 'react';

export const GameContext = createContext();

export const GameProvider = props => {
	const [game, setGame] = useState({
		teams: [
			{ name: 'Lucy', score: 0 },
			{ name: 'Ricky', score: 0 },
			{ name: 'Ethel', score: 0 },
			{ name: 'Fred', score: 0 }
		],
		categories: {
			category1: '1',
			category2: '2',
			category3: '3',
			category4: '4',
			category5: '5',
			category6: '6'
		},
		column1: [
			{ id: 100, question: '', answer: '' },
			{
				id: 200,
				question: 'How many states are in the USA?',
				answer: '50 states'
			},
			{
				id: 300,
				question: 'How many ounces are in a gallon?',
				answer: '128 ounces'
			},
			{
				id: 400,
				question: "What is California's captital?",
				answer: 'Sacramento'
			},
			{
				id: 500,
				question: 'Who was the 20th president?',
				answer: 'James A. Garfield'
			}
		],
		column2: [
			{ id: 100, question: 'How many legs do dogs have?', answer: '4' },
			{
				id: 200,
				question: 'How many states are in the USA?',
				answer: '50 states'
			},
			{
				id: 300,
				question: 'How many ounces are in a gallon?',
				answer: '128 ounces'
			},
			{
				id: 400,
				question: "WHat is California's captital?",
				answer: 'Sacramento'
			},
			{
				id: 500,
				question: 'Who was the 20th president?',
				answer: 'James A. Garfield'
			}
		],
		column3: [
			{ id: 100, question: 'How many legs do dogs have?', answer: '4' },
			{
				id: 200,
				question: 'How many states are in the USA?',
				answer: '50 states'
			},
			{
				id: 300,
				question: 'How many ounces are in a gallon?',
				answer: '128 ounces'
			},
			{
				id: 400,
				question: "WHat is California's captital?",
				answer: 'Sacramento'
			},
			{
				id: 500,
				question: 'Who was the 20th president?',
				answer: 'James A. Garfield'
			}
		],
		column4: [
			{ id: 100, question: 'How many legs do dogs have?', answer: '4' },
			{
				id: 200,
				question: 'How many states are in the USA?',
				answer: '50 states'
			},
			{
				id: 300,
				question: 'How many ounces are in a gallon?',
				answer: '128 ounces'
			},
			{
				id: 400,
				question: "WHat is California's captital?",
				answer: 'Sacramento'
			},
			{
				id: 500,
				question: 'Who was the 20th president?',
				answer: 'James A. Garfield'
			}
		],
		column5: [
			{ id: 100, question: 'How many legs do dogs have?', answer: '4' },
			{
				id: 200,
				question: 'How many states are in the USA?',
				answer: '50 states'
			},
			{
				id: 300,
				question: 'How many ounces are in a gallon?',
				answer: '128 ounces'
			},
			{
				id: 400,
				question: "WHat is California's captital?",
				answer: 'Sacramento'
			},
			{
				id: 500,
				question: 'Who was the 20th president?',
				answer: 'James A. Garfield'
			}
		],
		column6: [
			{ id: 100, question: 'How many legs do dogs have?', answer: '4' },
			{
				id: 200,
				question: 'How many states are in the USA?',
				answer: '50 states'
			},
			{
				id: 300,
				question: 'How many ounces are in a gallon?',
				answer: '128 ounces'
			},
			{
				id: 400,
				question: "WHat is California's captital?",
				answer: 'Sacramento'
			},
			{
				id: 500,
				question: 'Who was the 20th president?',
				answer: 'James A. Garfield'
			}
		]
	});
	return (
		<GameContext.Provider value={[game, setGame]}>
			{props.children}
		</GameContext.Provider>
	);
};
