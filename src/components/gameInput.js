import React, { useState } from 'react';
import FormInput1 from './FormInput1';
import FormInput2 from './FormInput2';
import Questions from './Questions';

function GameInput() {
	const [ data, setData ] = useState({
		step: 1,
		category1: 'Category 1',
		question1: '$300 Question',
		answer1: '$300 Answer',
		category2: 'Category 2',
		question2: '$300 Question',
		answer2: '$300 Answer',
		category3: 'Category 3',
		question3: '$300 Question',
		answer3: '$300 Answer',
		category4: 'Category 4',
		question4: '$300 Question',
		answer4: '$300 Answer',
		category5: 'Category 5',
		question5: '$300 Question',
		answer5: '$300 Answer'
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
			return (
				<FormInput1
					category={data.category1}
					question1={data.question1}
					answer1={data.answer1}
					nextStep={nextStep}
					onChange={onChange}
				/>
			);
		case 2:
			return <FormInput2 category={data.category2} prevStep={prevStep} nextStep={nextStep} onChange={onChange} />;
		case 3:
			return <FormInput2 category={data.category3} prevStep={prevStep} nextStep={nextStep} onChange={onChange} />;
		case 4:
			return <FormInput2 category={data.category4} prevStep={prevStep} nextStep={nextStep} onChange={onChange} />;
		case 5:
			return <FormInput2 category={data.category5} prevStep={prevStep} nextStep={nextStep} onChange={onChange} />;
		case 6:
			return <FormInput2 category={data.category6} prevStep={prevStep} nextStep={nextStep} onChange={onChange} />;
		case 7:
			return <Questions />;
		default:
			return 'Error';
	}
}

export default GameInput;
