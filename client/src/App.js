import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Scoreboard from './pages/Scoreboard';
import AddPlayer from './pages/AddPlayer';
import Rewards from './pages/Rewards';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
	return (
		<Router>
			<div className='bg-slate-700 bg-opacity-90 min-h-screen text-gray-50'>
				<Header />
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/scoreboard' element={<Scoreboard />} />
					<Route path='/rewards' element={<Rewards />} />
					<Route path='/addplayer' element={<AddPlayer />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />

					<Route
						path='*'
						element={
							<h1 className='h-screen p-72 flex flex-grow justify-center items-center text-center text-3xl font-bold text-gray-100'>
								404 - Not Found
							</h1>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
