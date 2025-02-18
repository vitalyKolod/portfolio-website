import React from 'react'
import ServicesCard from './Helper/ServicesCard'

const Services = () => {
	const servicesData = [
		{
			title: 'React-NextJs сайты',
			num: '01',
			description:
				'Создание современных веб-приложений с использованием React и Next.js. Мы предлагаем высококачественные решения для быстрой загрузки страниц.',
		},
		{
			title: 'HTML CSS сайты',
			num: '02',
			description:
				'Разработка статических сайтов с использованием HTML и CSS. Идеально подходит для простых проектов и лендингов, обеспечивая качество.',
		},
		{
			title: 'Full-Stack приложения',
			num: '03',
			description:
				'Создание полнофункциональных приложений с использованием современных технологий как на фронтенде, так и на бэкенде для бизнеса.',
		},
		{
			title: 'Разработка телеграм-ботов',
			num: '04',
			description:
				'Создание интерактивных телеграм-ботов для автоматизации процессов и улучшения взаимодействия с клиентами, что удобно.',
		},
		{
			title: 'Оптимизация и доработка',
			num: '05',
			description:
				'Оптимизация существующих проектов для повышения производительности и улучшения пользовательского опыта, что важно.',
		},
		{
			title: 'Фиксинг всех багов',
			num: '06',
			description:
				'Поиск и исправление ошибок в коде, чтобы обеспечить стабильную работу вашего приложения и удовлетворение пользователей.',
		},
	]

	return (
		<div id='services' className='pt-[5rem] pb-[3rem] bg-[#0b0c13]'>
			<div className='text-center' data-aos='fade-up'>
				<p className='heading_mini'>Популярные услуги</p>
				<h1 className='heading_primary'>
					Мои специальные <span className='text-yellow-300'>услуги</span> для
					вас
				</h1>
			</div>
			<div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center'>
				{servicesData.map(service => (
					<div key={service.num} data-aos='fade-up'>
						<ServicesCard
							title={service.title}
							num={service.num}
							description={service.description} // Используем уникальное описание для каждой карточки
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default Services
