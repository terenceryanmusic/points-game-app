import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../features/auth/authSlice';
import { UserAddIcon } from '@heroicons/react/solid';

const AddPlayer = () => {
	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const [userData, setUserData] = useState({
		name: '',
		age: '',
		colour: ''
	});

	const { name, age, colour } = userData;
	const navigate = useNavigate();

	const onChange = (e) => {
		setUserData((previousState) => ({
			...previousState,
			[e.target.name]: e.target.value
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const userData = {
			name,
			age,
			colour
		};

		if (!userData) {
			console.log('no user data!');
		} else {
			localStorage.setItem(JSON.stringify(userData));
			navigate('/');
		}
	};

	// uncomment once connected to avoid system memory leak
	// dispatch(register(userData), setTimeout(3000));

	return (
		<main className='flex flex-col md:min-h-[50rem] justify-center items-center p-4'>
			<div className='flex justify-center items-center bg-slate-800 h-16 p-4 mb-4 rounded-lg'>
				<UserAddIcon className='text-white-100 mr-2 h-10 bg-none' />
				<h1 className='text-3xl'>Add New Player</h1>
			</div>
			<form className='flex flex-col items-end' onSubmit={onSubmit}>
				<label className='font-semibold'>
					Name:
					<input
						type='text'
						name='name'
						value={name}
						onChange={onChange}
						className='h-10 w-48 ml-4 mb-4 p-2 rounded text-slate-800'
					/>
				</label>
				<label className='font-semibold'>
					Age:
					<input
						type='text'
						name='age'
						value={age}
						onChange={onChange}
						className='h-10 w-48 ml-4 mb-4 p-2 rounded text-slate-800'
					/>
				</label>
				<label className='font-semibold'>
					Colour:
					<select
						type='text'
						name='colour'
						value={colour}
						onChange={onChange}
						className='h-10 w-48 ml-4 mb-4 p-2 rounded text-slate-800'>
						<option value=''>Select a colour</option>
						<option value='red'>Red</option>
						<option value='green'>Green</option>
						<option value='blue'>Blue</option>
					</select>
				</label>
				<button className='bg-slate-800 px-4 py-2 rounded-md'>Submit</button>
			</form>
		</main>
	);
};

export default AddPlayer;
