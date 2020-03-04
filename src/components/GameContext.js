import React, { useState, createContext } from 'react';

export const GameContext = createContext();

export const GameProvider = (props) => {
	const [ game, setGame ] = useState([
		[
			[ 'Category 1' ],
			[ 100, 'How many legs do dogs have?', false ],
			[ 200, 'How many legs do cats have?', false ],
			[ 300, 'What color is a school bus?', false ],
			[ 400, 'What color is water?', false ],
			[ 500, 'What color is a food?', false ]
		],
		[
			[ 'Category 2' ],
			[ 100, 'How many legs do dogs have?', false ],
			[ 200, 'How many legs do cats have?', false ],
			[ 300, 'What color is a school bus?', false ],
			[ 400, 'What color is water?', false ],
			[ 500, 'What color is a food?', false ]
		],
		[
			[ 'Category 3' ],
			[ 100, 'How many legs do dogs have?', false ],
			[ 200, 'How many legs do cats have?', false ],
			[ 300, 'What color is a school bus?', false ],
			[ 400, 'What color is water?', false ],
			[ 500, 'What color is a food?', false ]
		],
		[
			[ 'Category 4' ],
			[ 100, 'How many legs do dogs have?', false ],
			[ 200, 'How many legs do cats have?', false ],
			[ 300, 'What color is a school bus?', false ],
			[ 400, 'What color is water?', false ],
			[ 500, 'What color is a food?', false ]
		],
		[
			[ 'Category 5' ],
			[ 100, 'How many legs do dogs have?', false ],
			[ 200, 'How many legs do cats have?', false ],
			[ 300, 'What color is a school bus?', false ],
			[ 400, 'What color is water?', false ],
			[ 500, 'What color is a food?', false ]
		],
		[
			[ 'Category 6' ],
			[ 100, 'How many legs do dogs have?', false ],
			[ 200, 'How many legs do cats have?', false ],
			[ 300, 'What color is a school bus?', false ],
			[ 400, 'What color is water?', false ],
			[ 500, 'What color is a food?', false ]
		],
	]);
	return <GameContext.Provider value={[ game, setGame ]}>{props.children}</GameContext.Provider>;
};
