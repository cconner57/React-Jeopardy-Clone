import React, { useState, createContext } from 'react';

export const GameContext = createContext();

export const GameProvider = (props) => {
	const [ game, setGame ] = useState({
		teams: {
			teamNames: {
				name1: 'Chris',
				name2: 'Marma',
				name3: 'Amos',
				name4: 'Delilah'
			},
			teamScores: {
				score1: 0,
				score2: 0,
				score3: 0,
				score4: 0
			}
		},
		categories: {
			category1: 'category 1',
			category2: 'category 2',
			category3: 'category 3',
			category4: 'category 4',
			category5: 'category 5',
			category6: 'category 6'
		},
		score: [ 100, 200, 300, 400, 500 ],
		questions: {
			set1: {
				question1: 'How many legs do dogs have?',
				question2: 'How many states are in the USA?',
				question3: 'How many ounces are in a gallon?',
				question4: 'What is California"s capital?',
				question5: 'Who was the 20th president'
			},
			set2: {
				question1: '',
				question2: '',
				question3: '',
				question4: '',
				question5: ''
			},
			set3: {
				question1: '',
				question2: '',
				question3: '',
				question4: '',
				question5: ''
			},
			set4: {
				question1: '',
				question2: '',
				question3: '',
				question4: '',
				question5: ''
			},
			set5: {
				question1: '',
				question2: '',
				question3: '',
				question4: '',
				question5: ''
			},
			set6: {
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
				answer5: '',
				answer6: ''
			},
			set2: {
				answer1: '',
				answer2: '',
				answer3: '',
				answer4: '',
				answer5: '',
				answer6: ''
			},
			set3: {
				answer1: '',
				answer2: '',
				answer3: '',
				answer4: '',
				answer5: '',
				answer6: ''
			},
			set4: {
				answer1: '',
				answer2: '',
				answer3: '',
				answer4: '',
				answer5: '',
				answer6: ''
			},
			set5: {
				answer1: '',
				answer2: '',
				answer3: '',
				answer4: '',
				answer5: '',
				answer6: ''
			},
			set6: {
				answer1: '',
				answer2: '',
				answer3: '',
				answer4: '',
				answer5: '',
				answer6: ''
			}
		}
	});
	return <GameContext.Provider value={[ game, setGame ]}>{props.children}</GameContext.Provider>;
};
