import { React, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import { ImSpinner8 } from 'react-icons/im';

const Register = () => {
	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		password2: ''
	});

	const { first_name, last_name, email, password, password2 } = formData;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (isSuccess || user) {
			navigate('/dashboard');
		}

		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const onChange = (e) => {
		setFormData((previousState) => ({
			...previousState,
			[e.target.name]: e.target.value
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (password !== password2) {
			toast.error('Passwords do not match');
		} else {
			const userData = {
				first_name,
				last_name,
				email,
				password
			};

			dispatch(register(userData), setTimeout(3000));
		}

		if (isLoading) {
			return (
				<div className='mx-auto my-auto '>
					<ImSpinner8 className='animate-spin h-10 w-10 lg:h-16 lg:w-16 text-gray-100' />
				</div>
			);
		}
	};

	return (
		<main className='flex flex-col items-center py-16 min-h-[93vh] '>
			<h1 className='text-4xl text-gray-100 pb-4'>New user registration</h1>
			<p className='text-xl text-gray-100 pb-2'>Please create an account</p>
			<p className='text-md text-gray-100 pb-8'>
				Already a user? Login in{' '}
				<Link to='/login' className='text-blue-400 underline underline-offset-2'>
					here
				</Link>
			</p>
			<form id='register-form' onSubmit={onSubmit} className='flex flex-col items-end '>
				<label>
					<span className='text-gray-100 pr-4'>First Name:</span>
					<input
						type='text'
						className='h-10 p-2 mb-4 rounded focus:outline-blue-500 text-gray-900'
						id='first_name'
						name='first_name'
						value={first_name}
						placeholder='First Name'
						onChange={onChange}
					/>
				</label>
				<label>
					<span className='text-gray-100 pr-4'>Last Name:</span>
					<input
						type='text'
						className='h-10 p-2 mb-4 rounded focus:outline-blue-500 text-gray-900'
						id='last_name'
						name='last_name'
						value={last_name}
						placeholder='Last Name'
						onChange={onChange}
					/>
				</label>
				<label>
					<span className='text-gray-100 pr-4'>Email Address:</span>
					<input
						type='text'
						className='h-10 p-2 mb-4 rounded focus:outline-blue-500 text-gray-900'
						id='email'
						name='email'
						value={email}
						placeholder='Email Address'
						onChange={onChange}
					/>
				</label>
				<label>
					<span className='text-gray-100 pr-4'>Password:</span>
					<input
						type='password'
						className='h-10 p-2 mb-4 rounded focus:outline-blue-500 text-gray-900'
						id='password'
						name='password'
						value={password}
						placeholder='Enter Password'
						onChange={onChange}
					/>
				</label>
				<label>
					<span className='text-gray-100 pr-4'>Password confirm:</span>
					<input
						type='password'
						className='h-10 p-2 mb-4 rounded focus:outline-blue-500 text-gray-900'
						id='password2'
						name='password2'
						value={password2}
						placeholder='Confirm Password'
						onChange={onChange}
					/>
				</label>
				<button className='bg-slate-800 px-4 py-2 rounded-md mx-auto'>Submit</button>
			</form>
		</main>
	);
};

export default Register;
