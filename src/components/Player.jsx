import React from 'react';

const Player = () => {
	const players = Object.keys(localStorage).map((keys) => localStorage.getItem(keys));
	return (
		<section className='flex flex-col items-center'>
			{players.map((player) => (
				<article
					className='grid justify-center items-center bg-slate-800 h-auto p-12 w-96 mb-12 rounded-xl'
					key={player.key}
					player={player}>
					{player}
					<div className='flex justify-center items-center mt-4'>
						<button className='w-20 h-8 mr-4 rounded-md bg-yellow-600'>1 point</button>
						<button className='w-20 h-8 mr-4 rounded-md bg-orange-600'>3 points</button>
						<button className='w-20 h-8 rounded-md bg-green-600'>5 points</button>
					</div>
				</article>
			))}
		</section>
	);
};

export default Player;
