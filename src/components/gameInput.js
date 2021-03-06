import React, { useState } from 'react';
import Welcome from './Welcome';
// import TeamInput from './Form/TeamInput';
import QuestionInput from './Form/QuestionInput';
import Board from './Board';
import { GameProvider } from './GameContext';

const GameInput = () => {
	const [data, setData] = useState({
		step: 1
	});

	const nextStep = () => {
		setData({
			step: data.step + 1
		});
	};

	switch (data.step) {
		case 1:
			return <Welcome nextStep={nextStep} />;
		case 2:
			return (
				<GameProvider>
					<QuestionInput
						step={data.step}
						nextStep={nextStep}
					/>
					{/* <TeamInput nextStep={nextStep} onChange={onChange} /> */}
				</GameProvider>
			);
		// case 3:
		// 	return (
		// 		<GameProvider>
		// 			<QuestionInput
		// 				category='Category 2'
		// 				step={data.step}
		// 				nextStep={nextStep}
		// 			/>
		// 		</GameProvider>
		// 	);
		// case 4:
		// 	return (
		// 		<GameProvider>
		// 			<QuestionInput
		// 				category='Category 3'
		// 				step={data.step}
		// 				nextStep={nextStep}
		// 			/>
		// 		</GameProvider>
		// 	);
		// case 5:
		// 	return (
		// 		<GameProvider>
		// 			<QuestionInput
		// 				category='Category 4'
		// 				step={data.step}
		// 				nextStep={nextStep}
		// 			/>
		// 		</GameProvider>
		// 	);
		// case 6:
		// 	return (
		// 		<GameProvider>
		// 			<QuestionInput
		// 				category='Category 5'
		// 				step={data.step}
		// 				nextStep={nextStep}
		// 			/>
		// 		</GameProvider>
		// 	);
		// case 7:
		// 	return (
		// 		<GameProvider>
		// 			<QuestionInput
		// 				category='Category 6'
		// 				step={data.step}
		// 				nextStep={nextStep}
		// 			/>
		// 		</GameProvider>
		// 	);
		case 3:
			return (
				<GameProvider>
					<Board />
				</GameProvider>
			);
		default:
			return 'Error';
	}
};

export default GameInput;
