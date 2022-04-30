import { Link } from 'react-router-dom';
const Nav = () => {
	return (
		<nav className='flex'>
			<ul className='flex'>
				<Link to='/'>
					<li className='mr-2 px-2 py-1 bg-gradient-to-br from-red-700 to-pink-600 rounded'>Home</li>
				</Link>
				<Link to='/addplayer'>
					<li className='px-2 py-1 bg-gradient-to-br from-red-700 to-pink-600 rounded'>Add player</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Nav;
