import { CheckIcon } from '@heroicons/react/16/solid'
import React from 'react'

interface Feature {
	text: string
}

interface PriceCardProps {
	plane: string

	price: string
	bg: string
	features: Feature[]
}

const PriceCard = ({ bg, plane, price, features }: PriceCardProps) => {
	return (
		<div className='text-center rounded-lg bg-gray-900 h-[500px] flex flex-col'>
			<div className={`p-6 rounded-t-lg ${bg}`}>
				<h1 className='text-white text-[20px]'>{plane}</h1>
				<p className='text-[14px] text-[#d7d7d7]'>
					Цена приблизительная*<span className='text-yellow'></span>
				</p>
				<div className='flex justify-center items-end mt-[1rem] space-x-1'>
					<h1 className='text-[40px] font-bold text-yellow-400'>{price}</h1>
				</div>
			</div>
			<div className='p-6 flex-grow'>
				{features.map((feature, index) => (
					<div
						className='flex items-center space-x-3 mt-[1rem] mb-[1rem]'
						key={index}
					>
						<CheckIcon className='w-[1.4rem] h-[1.4rem] text-yellow-400' />
						<p className='text-[17px] text-white opacity-80'>{feature.text}</p>
					</div>
				))}
			</div>
			<a
				href='https://t.me/Vitaly_Kolodchenko'
				target='_blank'
				rel='noopener noreferrer'
			>
				<button className='mt-[1.5rem] px-8 py-4 bg-blue-600 text-white block w-[100%] hover:bg-blue-800 transition-all duration-300'>
					Заказать
				</button>
			</a>
		</div>
	)
}

export default PriceCard
