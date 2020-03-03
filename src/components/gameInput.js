import React, { useState } from 'react';
import Welcome from './Welcome';
import FormInput1 from './Form/FormInput1';
import FormInput2 from './Form/FormInput2';
import Board from './Board';
import { GameProvider } from './GameContext';
import { TeamProvider } from './TeamContext';

const GameInput = () => {
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
		case 1:
			return <Welcome nextStep={nextStep} />;
		case 2:
			return (
				<GameProvider>
					<TeamProvider>
						<FormInput1 nextStep={nextStep} onChange={onChange} />
					</TeamProvider>
				</GameProvider>
			);
		case 3:
			return (
				<GameProvider>
					<FormInput2 category="Category 2" prevStep={prevStep} nextStep={nextStep} onChange={onChange} />
				</GameProvider>
			);
		case 4:
			return (
				<GameProvider>
					<FormInput2 category="Category 3" prevStep={prevStep} nextStep={nextStep} onChange={onChange} />
				</GameProvider>
			);
		case 5:
			return (
				<GameProvider>
					<FormInput2 category="Category 4" prevStep={prevStep} nextStep={nextStep} onChange={onChange} />
				</GameProvider>
			);
		case 6:
			return (
				<GameProvider>
					<FormInput2 category="Category 5" prevStep={prevStep} nextStep={nextStep} onChange={onChange} />
				</GameProvider>
			);
		case 7:
			return (
				<GameProvider>
					<FormInput2 category="Category 6" prevStep={prevStep} nextStep={nextStep} onChange={onChange} />
				</GameProvider>
			);
		case 8:
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
