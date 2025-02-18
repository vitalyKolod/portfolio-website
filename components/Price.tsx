import React from 'react'
import PriceCard from './Helper/PriceCard'

const Price = () => {
	const priceCardsData = [
		{
			plane: 'Простые сайты визитки',
			price: '10.000р',

			bg: 'bg-red-900',
			features: [
				{ text: 'Разработка сайта' },
				{ text: 'Доработки и корректировки' },
				{ text: 'Хостинг' },
				{ text: 'Всегда связь со мной' },
			],
		},
		{
			plane: 'Разработка телеграм-ботов',
			price: '5.000р и выше',

			bg: 'bg-green-900',
			features: [
				{ text: 'Разработка бота' },
				{ text: 'Доработка и корректировки' },
				{ text: 'Хостинг' },
				{ text: 'Всегда связь со мной' },
			],
		},
		{
			plane: 'Full-stack сайты и приложения',
			price: '30.000р и выше',

			bg: 'bg-blue-900',
			features: [
				{ text: 'Разработка сайта' },
				{ text: 'Доработка и корректировки' },
				{ text: 'Хостинг' },
				{ text: 'Всегда связь со мной' },
			],
		},
	]

	return (
		<div id='price' className='pt-[5rem] pb-[3rem] bg-black'>
			<div className='text-center'>
				<p className='heading_mini'>Популярные заказы</p>
				<h1 className='heading_primary'>
					Лучшие <span className='text-yellow-300'>Цены</span> для Ваших
					проектов
				</h1>
			</div>
			<div className='w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 items-center pt-[4rem] md:pt-[7rem]'>
				{priceCardsData.map((card, index) => (
					<PriceCard
						key={index}
						plane={card.plane}
						price={card.price}
						bg={card.bg}
						features={card.features}
					/>
				))}
			</div>
		</div>
	)
}

export default Price
