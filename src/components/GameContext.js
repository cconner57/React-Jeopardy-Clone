import React, { useState, createContext } from 'react';

export const GameContext = createContext();

export const GameProvider = props => {
	const [game, setGame] = useState({
		teams: {
			team1: {
				name: 'Chris',
				score: 0
			},
			team2: {
				name: 'Marma',
				score: 0
			},
			team3: {
				name: 'Amos',
				score: 0
			},
			team4: {
				name: 'Delilah',
				score: 0
			}
		},
		score: [100, 200, 300, 400, 500],
		questions: {
			set1: {
				category: 'Category 1',
				question1: 'How many legs do dogs have?',
				question2: 'How many states are in the USA?',
				question3: 'How many ounces are in a gallon?',
				question4: 'What is California"s capital?',
				question5: 'Who was the 20th president'
			},
			set2: {
				category: 'Category 2',
				question1: '',
				question2: '',
				question3: '',
				question4: '',
				question5: ''
			},
			set3: {
				category: 'Category 3',
				question1: '',
				question2: '',
				question3: '',
				question4: '',
				question5: ''
			},
			set4: {
				category: 'Category 4',
				question1: '',
				question2: '',
				question3: '',
				question4: '',
				question5: ''
			},
			set5: {
				category: 'Category 5',
				question1: '',
				question2: '',
				question3: '',
				question4: '',
				question5: ''
			},
			set6: {
				category: 'Category 6',
				question1: '',
				question2: '',
				question3: '',
				question4: '',
				question5: ''
			}
		},
		answers: {
			set1: {
				answer1: '',
				answer2: '',
				answer3: '',
				answer4: '',
				answer5: ''
			},
			set2: {
				answer1: '',
				answer2: '',
				answer3: '',
				answer4: '',
				answer5: ''
			},
			set3: {
				answer1: '',
				answer2: '',
				answer3: '',
				answer4: '',
				answer5: ''
			},
			set4: {
				answer1: '',
				answer2: '',
				answer3: '',
				answer4: '',
				answer5: ''
			},
			set5: {
				answer1: '',
				answer2: '',
				answer3: '',
				answer4: '',
				answer5: ''
			},
			set6: {
				answer1: '',
				answer2: '',
				answer3: '',
				answer4: '',
				answer5: ''
			}
		}
	});
	return (
		<GameContext.Provider value={[game, setGame]}>
			{props.children}
		</GameContext.Provider>
	);
};
