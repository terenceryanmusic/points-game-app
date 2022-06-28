import React from 'react';
import Footer from '../components/Footer';
import Player from '../components/Player';
import { ClipboardListIcon } from '@heroicons/react/outline';

const Scoreboard = () => {
	return (
		<>
			<main className='flex flex-col justify-center items-center p-4'>
				<div className='flex justify-center items-center bg-slate-800 h-16 p-4 mb-4 rounded-lg'>
					<ClipboardListIcon className='text-white-100 mr-2 h-10 bg-none' />
					<h1 className='text-3xl text-center py-4'>Scoreboard</h1>
					<Player />
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Scoreboard;
