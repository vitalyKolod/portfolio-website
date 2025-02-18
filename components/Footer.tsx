import { EnvelopeIcon } from '@heroicons/react/16/solid'
import { RssIcon } from '@heroicons/react/16/solid'
import { FilmIcon } from '@heroicons/react/16/solid'
import { EnvelopeOpenIcon, MapPinIcon } from '@heroicons/react/16/solid'
import { PhoneIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { Link } from 'react-scroll'
import { FaTelegramPlane, FaWhatsapp, FaGithub } from 'react-icons/fa'

const Footer = () => {
	return (
		<div id='contacts' className='pt-[5rem] pb-[3rem] bg-[#0b0c13]'>
			<div className='w-[80%] mx-auto grid grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40'>
				<div>
					<div className='font-logo text-white text-[18px]'>
						<span className='text-[30px] md:text[40px] text-yellow-400'>
							VK
						</span>
					</div>
					<h1 className='text-[14px] mt-[0.5rem] text-white opacity-70'>
						Я занимаюсь фронтенд-разработкой и имею опыт работы с такими
						технологиями, как HTML, CSS и JavaScript. Я также знаком с
						современными фреймворками, такими как React, что позволяет мне
						создавать интерактивные и отзывчивые пользовательские интерфейсы.
					</h1>
					{/* Добавляем иконки */}
					<div className='flex justify-center space-x-4 mt-4 text-white text-[25px]'>
						<a
							href='https://t.me/Vitaly_Kolodchenko'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaTelegramPlane />
						</a>
						<a
							href='https://wa.me/89619716339'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaWhatsapp />
						</a>
						<a
							href='https://github.com/vitalyKolod'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaGithub />
						</a>
					</div>
				</div>
				<div className='md:mx-auto'>
					<h1 className='text-white font-semibold mb-[1rem] text-[19px]'>
						Quick Link
					</h1>
					<Link to='home' smooth={true} duration={500} className=''>
						<p className='text-[15px] text-white mb-[1rem] text-center cursor-pointer hover:text-yellow-300'>
							Главная
						</p>
					</Link>

					<Link to='about' smooth={true} duration={500} className=''>
						<p className='text-[15px] text-white mb-[1rem] text-center cursor-pointer hover:text-yellow-300'>
							О мне
						</p>
					</Link>

					<Link to='services' smooth={true} duration={500} className=''>
						<p className='text-[15px] text-white mb-[1rem] text-center cursor-pointer hover:text-yellow-300'>
							Услуги
						</p>
					</Link>

					<Link to='price' smooth={true} duration={500} className=''>
						<p className='text-[15px] text-white mb-[1rem] text-center cursor-pointer hover:text-yellow-300'>
							Цены
						</p>
					</Link>
				</div>
				<div className='lg:mx-auto'>
					<h1 className='text-white font-semibold mb-[1.4rem] text-[17px]'>
						Address
					</h1>
					<div className='flex items-center mt-[1rem] space-x-2'>
						<MapPinIcon className='w-[1rem] h-[1rem] text-yellow-300' />
						<p className='text-[17px] font-normal text-white opacity-75'>
							Россия, г.Майкоп, ст.Ханская д.105
						</p>
					</div>

					<div className='flex items-center mt-[1rem] space-x-2'>
						<EnvelopeIcon className='w-[1rem] h-[1rem] text-yellow-300' />
						<p className='text-[17px] font-normal text-white opacity-75'>
							vitali.kolodchenko@yandex.ru
						</p>
					</div>
					<div className='flex items-center mt-[1rem] space-x-2'>
						<PhoneIcon className='w-[1rem] h-[1rem] text-yellow-300' />
						<p className='text-[17px] font-normal text-white opacity-75'>
							+7-961-971-63-39
						</p>
					</div>
				</div>
			</div>
			<div className='mt-[1.4rem] w-[80%] mx-auto text-white opacity-70 text-center'>
				&#169; Copyright Kolodchenko Vitaly 2025
			</div>
		</div>
	)
}

export default Footer
