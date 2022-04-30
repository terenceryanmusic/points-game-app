import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddPlayer = () => {
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

	const id = uuidv4();

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
			localStorage.setItem(`Player ${id}`, JSON.stringify(userData));
			navigate('/');
		}
	};

	return (
		<main className='flex flex-col justify-center items-center p-4'>
			<h1 className='text-3xl m-8'>Add New Player</h1>
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
