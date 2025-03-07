import { Bars3BottomLeftIcon } from '@heroicons/react/16/solid'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-scroll'

interface Props {
	openNav: () => void
}

const Nav = ({ openNav }: Props) => {
	const [navSticky, setNavSticky] = useState(false)

	useEffect(() => {
		const handler = () => {
			if (window.scrollY >= 90) {
				setNavSticky(true)
			}
			if (window.scrollY <= 90) {
				setNavSticky(false)
			}
		}
		window.addEventListener('scroll', handler)
	}, [])

	const stickyStyle = navSticky ? 'bg-[#212428] shadow-gray-900 shadow-sm' : ''
	return (
		<div
			className={`fixed w-[100%] ${stickyStyle} transition-all duration-300 z-[1000] `}
		>
			<div className='flex items-center h-[12vh] justify-between w-[80%] mx-auto'>
				<div className='font-logo text-white text-[18px]'>
					<span className='text-[30px] md:text-[40px] text-yellow-400'>
						VK{' '}
					</span>
				</div>
				<ul className='md:flex hidden items-center space-x-10'>
					<li>
						<Link to='home' smooth={true} duration={500} className='nav_link'>
							Главная
						</Link>
					</li>
					<li>
						<Link to='about' smooth={true} duration={500} className='nav_link'>
							О мне
						</Link>
					</li>
					<li>
						<Link
							to='services'
							smooth={true}
							duration={500}
							className='nav_link'
						>
							Услуги
						</Link>
					</li>

					<li>
						<Link
							to='contacts'
							smooth={true}
							duration={500}
							className='nav_link'
						>
							Контакты
						</Link>
					</li>
				</ul>
				<Bars3BottomLeftIcon
					onClick={openNav}
					className='w-[2.3 rem] md:hidden h-[2.3rem] text-white rotate-180'
				/>
			</div>
		</div>
	)
}

export default Nav
