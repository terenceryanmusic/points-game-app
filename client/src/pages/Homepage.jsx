import React from 'react';
import Player from '../components/Player';

const Homepage = () => {
	return (
		<main className='p-4'>
			<h1 className='text-3xl text-center mb-4 py-4'>Current points</h1>
			<Player />
		</main>
	);
};

export default Homepage;
