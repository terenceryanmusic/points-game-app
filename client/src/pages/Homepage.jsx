import React from 'react';
import Player from '../components/Player';
import { HomeIcon } from '@heroicons/react/outline';

const Homepage = () => {
	return (
		<>
			<main className='block mx-auto p-8'>
				<div className='flex flex-col md:flex-row justify-center items-center mt-12 md:mt-24 mb-4'>
					<HomeIcon className='text-white-100 mr-2 h-12 w-12 bg-none' />
					<h1 className='text-5xl text-center py-4'>Welcome To the Points Game!</h1>
					<Player />
				</div>
				<p className='flex justify-center'>
					The Points Game App is a simple way for parents to utilize a points tracking system to keep track of points
					and build up rewards for children.
				</p>
			</main>
			<aside className='grid grid-cols-1 gap-5 md:grid-cols-2 p-12 text-2xl'>
				<article className="bg-[url('./img/balls.jpg')] grid place-content-center h-48 bg-slate-800 p-2 rounded-md">
					<p className='bg-slate-900 bg-opacity-50 p-2 rounded-md'>Points</p>
				</article>
				<article className='grid place-content-center h-48 bg-slate-800 p-2 rounded-md'>
					<p>Scoreboard</p>
				</article>
				<article className='grid place-content-center h-48 bg-slate-800 p-2 rounded-md'>
					<p>Rewards</p>
				</article>
				<article className='grid place-content-center h-48 bg-slate-800 p-2 rounded-md'>
					<p>Join Today</p>
				</article>
			</aside>
		</>
	);
};

export default Homepage;
