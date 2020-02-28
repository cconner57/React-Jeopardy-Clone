import React, { useState } from 'react';
import FormInput1 from './FormInput1';
import FormInput2 from './FormInput2';
import Board from './Board';
import { GameProvider } from './GameContext';

function GameInput() {
	const [ data, setData ] = useState({
		step: 1
	});

	const nextStep = () => {
		setData({
			step: data.step + 1
		});
	};

	const prevStep = () => {
		setData({
			step: data.step - 1
		});
	};

	const onChange = (input) => (e) => {
		setData({ [input]: e.target.value });
	};

	switch (data.step) {
		case 7:
			return (
				<GameProvider>
					<FormInput1 nextStep={nextStep} onChange={onChange} />
				</GameProvider>
			);
		case 2:
			return (
				<GameProvider>
					<FormInput2 category='Category 2' prevStep={prevStep} nextStep={nextStep} onChange={onChange} />
				</GameProvider>
			);
		case 3:
			return (
				<GameProvider>
					<FormInput2 category='Category 3' prevStep={prevStep} nextStep={nextStep} onChange={onChange} />
				</GameProvider>
			);
		case 4:
			return (
				<GameProvider>
					<FormInput2 category='Category 4' prevStep={prevStep} nextStep={nextStep} onChange={onChange} />
				</GameProvider>
			);
		case 5:
			return (
				<GameProvider>
					<FormInput2 category='Category 5' prevStep={prevStep} nextStep={nextStep} onChange={onChange} />
				</GameProvider>
			);
		case 6:
			return (
				<GameProvider>
					<FormInput2 category='Category 6' prevStep={prevStep} nextStep={nextStep} onChange={onChange} />
				</GameProvider>
			);
		case 1:
			return <Board />;
		default:
			return 'Error';
	}
}

export default GameInput;
