import React from 'react';
import Scoreboard from './Scoreboard';
const Player = () => {
	const players = Object.keys(localStorage).map((keys) => localStorage.getItem(keys));

	console.log(players);

	return (
		<section className='flex flex-col justify-around items-center'>
			{players.map((player) => (
				<article
					className='grid justify-center items-center bg-slate-800 h-auto p-12 w-96 mb-12 rounded-xl'
					key={player.key}
					player={player}>
					{player}
					<Scoreboard />
				</article>
			))}
		</section>
	);
};

export default Player;
