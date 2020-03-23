import React from 'react';

const Progress = ({ step }) => {
	return (
		<div className='Progress-Bar'>
			<div
				className='Progress-Fill'
				style={{ width: `${step * 16.66}%` }}></div>
		</div>
	);
};

export default Progress;
