import React, { useState } from 'react';

const Scoreboard = (player) => {
	const [points, setPoints] = useState(0);

	return (
		<div className='my-2'>
			<h2 className='text-center text-xl'>Scoreboard</h2>
			<h3 className='text-center text-3xl'>{points} points</h3>
			<div className='flex justify-center items-center mt-4'>
				<button className='w-20 h-8 mr-4 rounded-md bg-yellow-600' onClick={() => setPoints(points + 1)}>
					1 point
				</button>
				<button className='w-20 h-8 mr-4 rounded-md bg-orange-600' onClick={() => setPoints(points + 3)}>
					3 points
				</button>
				<button className='w-20 h-8 rounded-md bg-green-600' onClick={() => setPoints(points + 5)}>
					5 points
				</button>
			</div>
		</div>
	);
};

export default Scoreboard;
