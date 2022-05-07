import Nav from './Nav';
import { PuzzleIcon } from '@heroicons/react/solid';

const Header = () => {
	return (
		<header className='flex justify-between items-center py-2 px-4 h-16 bg-slate-800'>
			<div className='flex items-center'>
				<PuzzleIcon className='h-6 mr-2' />
				<p className="text-2xl font-['Quicksand'] font-semibold">Points Game</p>
			</div>
			<Nav />
		</header>
	);
};

export default Header;
