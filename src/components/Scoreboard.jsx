import React, { useState } from 'react';

const Scoreboard = () => {
	const [points, setPoints] = useState(0);
	// const [hundreds, setHundreds] = useState(0);

	const onChange = (e) => {
		setPoints(e.target.value);
	};

	// if (points >= 100) {
	// 	setHundreds((prev) => !prev);
	// }

	return (
		<div>
			<h2 className='text-center text-xl'>Scoreboard</h2>
			<h3 className='text-center text-3xl'>{points} points</h3>
			<div className='flex justify-center items-center mt-4'>
				<button className='w-20 h-8 mr-4 rounded-md bg-yellow-600' name='1' value={1} onChange={onChange}>
					1 point
				</button>
				<button className='w-20 h-8 mr-4 rounded-md bg-orange-600' name='3' value={3} onChange={onChange}>
					3 points
				</button>
				<button className='w-20 h-8 rounded-md bg-green-600' name='5' value={5} onChange={onChange}>
					5 points
				</button>
			</div>
		</div>
	);
};

export default Scoreboard;
