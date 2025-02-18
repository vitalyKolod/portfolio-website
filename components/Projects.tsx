import React from 'react'
import ProjectCard from './Helper/ProjectCard'

const Projects = () => {
	return (
		<div id='projects' className='pt-[5rem] pb-[3rem] bg-gray-900'>
			<div data-aos='fade-up' className='text-center'>
				<p className='heading_mini'>Лучшие проекты</p>
				<h1 className='heading_primary'>
					Мои недавние <span className='text-yellow-300'>проекты</span>
				</h1>
			</div>
			<ProjectCard
				data-aos='fade-right'
				title='Сайт для молодежной конференции'
				techs={['HTML', 'CSS', 'JavaScript']}
				image='/images/prj1.png'
				description='Сайт разработан для христианской молодежной конференции который включает в себя обширный функционал, регистрацию, оплату и многое другое'
			/>
			<ProjectCard
				title='Сайт для музыкальной школы'
				techs={['HTML', 'CSS', 'JavaScript']}
				image='/images/prj2.png'
				description='Курсовой проект разработанный для музыкальной школы. Сайт включает в себе множество секций и страниц, а так же работу с бекендом'
			/>
			<ProjectCard
				title='Мой сайт портфолио '
				techs={['React', 'Next', 'Tailwind', 'TypeScript']}
				image='/images/prj3.png'
				description='Мой персональный сайт портфолио, который ознакомит вас со мной, как с разработчиком, на котором вы можете ознакомиться с моими проектами, расценками и связаться со мной'
			/>
			<ProjectCard
				title='Сайт грузоперевозки'
				techs={['HTML', 'CSS', 'JavaScript']}
				image='/images/prj4.png'
				description='Курсовой проект на тему грузоперевозок. Сайт включает в себя адаптивный дизайн и несколько разделов с динамичностью'
			/>
		</div>
	)
}

export default Projects
