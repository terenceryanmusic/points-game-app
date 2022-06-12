import React from 'react';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='text-gray-500'>
			<section className='grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4 min-h-36 w-full bg-slate-900 absolute bottom-12 p-8'>
				<div className='border-gray-500 border-0 md:border-r-2'>
					<h5 className='font-semibold bg-gray-500 text-slate-900 p-1 mb-4 w-[10.5rem] text-center'>
						About Points Game
					</h5>
					<p className='pr-6'>
						The Points Game App is a simple way for parents to utilize a points tracking system to keep track of points
						and build up rewards for children.
					</p>
				</div>
				<div className='border-gray-500 border-0 md:border-r-2'>Rules</div>
				<div className='border-gray-500 border-0 lg:border-r-2'>Rewards</div>
				<div className=''>Social Media</div>
			</section>
			<section className='bg-black absolute bottom-0 w-full'>
				<p className='p-4 text-sm text-gray-400 text-center'>Points Game - copyright &copy; 2021 - {currentYear}.</p>
			</section>
		</footer>
	);
};

export default Footer;
