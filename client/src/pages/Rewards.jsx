import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

const Rewards = () => {
	return (
		<main className='flex flex-col justify-center items-center p-4'>
			<div className='flex justify-center items-center bg-slate-800 h-16 p-4 mb-4 rounded-lg'>
				<StarIcon className='text-yellow-300 mr-2 h-10 bg-none' />
				<h1 className='text-3xl text-center py-4'>Rewards</h1>
			</div>
		</main>
	);
};

export default Rewards;
