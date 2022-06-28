import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login, reset } from '../features/auth/authSlice';
import { ImSpinner8 } from 'react-icons/im';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	const { email, password } = formData;

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

		const userData = {
			email,
			password
		};

		dispatch(login(userData));
	};

	if (isLoading) {
		return (
			<div className='flex justify-center items-center min-h-[50vh] '>
				<ImSpinner8 className='animate-spin h-10 w-10 lg:h-16 lg:w-16 text-gray-100' />
			</div>
		);
	}

	return (
		<main className='flex flex-col items-center py-24 min-h-[93vh]'>
			<h1 className='text-4xl text-gray-100 pb-4'>User Login</h1>
			<p className='text-xl text-gray-100 pb-2'>Login to access app features</p>
			<p className='text-md text-gray-100 pb-8'>
				Or create a new account{' '}
				<Link to='/register' className='text-slate-900 underline underline-offset-2'>
					here
				</Link>
			</p>
			<form id='register-form' onSubmit={onSubmit} className='flex flex-col items-end '>
				<label>
					<span className='text-gray-100 pr-4'>Email Address:</span>
					<input
						type='text'
						className='h-10 p-2 mb-4 rounded focus:outline-slate-800 text-gray-900'
						id='email'
						name='email'
						value={email}
						placeholder='Email Address'
						autoComplete='email-address'
						onChange={onChange}
					/>
				</label>
				<label>
					<span className='text-gray-100 pr-4'>Password:</span>
					<input
						type='password'
						className='h-10 p-2 mb-8  rounded focus:outline-slate-800 text-gray-900'
						id='password'
						name='password'
						value={password}
						placeholder='Enter Password'
						autoComplete='current-password'
						onChange={onChange}
					/>
				</label>
				<button className='bg-slate-800 px-4 py-2 rounded-md mx-auto'>Submit</button>
			</form>
		</main>
	);
};

export default Login;
