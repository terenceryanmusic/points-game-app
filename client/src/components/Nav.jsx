import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { HomeIcon, LoginIcon, LogoutIcon, StarIcon, UserAddIcon, ClipboardListIcon } from '@heroicons/react/solid';

const Nav = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	const onLogout = (e) => {
		e.preventDefault();
		dispatch(logout());
		dispatch(reset());
		navigate('/');
	};
	return (
		<nav className='flex'>
			{user ? (
				<ul className='flex items-center justify-between w-[25rem]'>
					<Link to='/scoreboard'>
						<li className='flex items-center p-2 bg-gradient-to-br from-green-500 to-green-800 rounded'>
							<ClipboardListIcon className='text-white-200 mr-1 h-5 bg-none' />
							Scoreboard
						</li>
					</Link>
					<Link to='/rewards'>
						<li className='flex items-center px-4 py-2 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded'>
							<StarIcon className='text-white-200 mr-1 h-5 bg-none' />
							Rewards
						</li>
					</Link>
					<Link to='/addplayer'>
						<li className='flex items-center p-2 bg-gradient-to-br from-blue-700 to-blue-900 rounded'>
							<UserAddIcon className='text-white-200 mr-1 h-5 bg-none' />
							New Player
						</li>
					</Link>
					<li>
						<button
							className='flex items-center p-2 bg-gradient-to-br from-blue-700 to-blue-900 rounded'
							onClick={onLogout}>
							<LogoutIcon className='text-white-200 mr-1 h-5 bg-none' />
							Logout
						</button>
					</li>
				</ul>
			) : (
				<>
					<Link to='/'>
						<li className='flex items-center p-2 mr-2 bg-gradient-to-br from-blue-700 to-blue-900 rounded'>
							<HomeIcon className='text-white-200 mr-1 h-5 bg-none' />
							Home
						</li>
					</Link>
					<Link to='/login'>
						<li className='flex items-center p-2 bg-gradient-to-br from-blue-700 to-blue-900 rounded'>
							<LoginIcon className='text-white-200 mr-1 h-5 bg-none' />
							Login
						</li>
					</Link>
				</>
			)}
		</nav>
	);
};

export default Nav;
