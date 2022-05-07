import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import AddPlayer from './pages/AddPlayer';
import Rewards from './pages/Rewards';

function App() {
	return (
		<Router>
			<div className='min-h-screen bg-gradient-to-br from-blue-600 to-slate-800 text-gray-50'>
				<Header />
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/addplayer' element={<AddPlayer />} />
					<Route path='/rewards' element={<Rewards />} />

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
