import Image from 'next/image'
import React from 'react'

interface Props {
	title: string
	techs: string[]
	image: string
	description: string
}

const ProjectCard = ({ title, techs, image, description }: Props) => {
	return (
		<div className='grid w-[80%] mx-auto pt-[5rem] sm:grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
			<div className='p-4 rounded-x1 relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md'>
				<Image
					src={`${image}`}
					alt={title}
					width={800}
					height={800}
					className='object-contain rounded-x1 mx-auto shadow-md'
				/>
			</div>
			<div>
				<h1 className='text-[25px] text-white'>{title}</h1>
				<p className='text-[17px] opacity-65 text-white mt-[1rem]'>
					{description}
				</p>
				<div className='mt-[1.3rem] grid-cols-2 grid sm:grid-cols-3 xl:grid-cols-4 gap-[2rem]'>
					{techs.map((tech, index) => (
						<h1
							key={index}
							className='px-6 py-3 bg-orange-700 text-white rounded-lg text-center'
						>
							{tech}
						</h1>
					))}
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
