import {
	QrCodeIcon,
	BugAntIcon,
	CodeBracketIcon,
	CommandLineIcon,
	RocketLaunchIcon,
	ServerIcon,
	ComputerDesktopIcon,
} from '@heroicons/react/16/solid'
import React from 'react'

interface Props {
	title: string
	num: string
	description: string // Добавляем новый пропс
}

const iconMapping = {
	'01': CommandLineIcon,
	'02': CodeBracketIcon,
	'03': ServerIcon,
	'04': QrCodeIcon,
	'05': RocketLaunchIcon,
	'06': BugAntIcon,
	'07': ComputerDesktopIcon,
}

const ServicesCard = ({ title, num, description }: Props) => {
	const IconComponent =
		(iconMapping as Record<string, React.ElementType>)[num] || CommandLineIcon
	return (
		<div className='bg-black custom_service z-[100] relative transform rounded-2xl text-center p-6 shadow-ms'>
			<IconComponent className='w-[5rem] relative z-[1] mx-auto h-[5rem] text-yellow-400' />
			<h1 className='text-[25px] relative z-[1] text-white mt-[1rem]'>
				{title}
			</h1>
			<p className='text-white text-[15px] opacity-60 mt-[0.8rem]'>
				{description} {/* Используем новый пропс для отображения описания */}
			</p>
			<p className='text-white text-[1.6rem] font-bold absolute top-3 right-4'>
				{num}
			</p>
		</div>
	)
}

export default ServicesCard
