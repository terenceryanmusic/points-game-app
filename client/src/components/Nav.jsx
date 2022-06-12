import { Link } from 'react-router-dom';
import { StarIcon, UserAddIcon, ClipboardListIcon } from '@heroicons/react/solid';

const Nav = () => {
	return (
		<nav className='flex'>
			<ul className='flex items-center justify-between w-[25rem]'>
				<Link to='/'>
					<li className='flex items-center p-2 bg-gradient-to-br from-green-500 to-green-800 rounded'>
						<ClipboardListIcon className='text-white-200 mr-1 h-5 bg-none' />
						Scoreboard
					</li>
				</Link>
				<Link to='/rewards'>
					<li className='flex items-center px-4 py-2 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded'>
						<StarIcon className='text-yellow-300 mr-1 h-5 bg-none' />
						Rewards
					</li>
				</Link>
				<Link to='/addplayer'>
					<li className='flex items-center p-2 bg-gradient-to-br from-blue-700 to-blue-900 rounded'>
						<UserAddIcon className='text-white-200 mr-1 h-5 bg-none' />
						New Player
					</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Nav;
