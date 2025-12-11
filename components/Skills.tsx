import React from 'react'
import SkillCard from './Helper/SkillCard'
import { Link } from 'react-scroll'

const Skills = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
        <div className="col-span-3" data-aos="fade-right">
          <p className="heading_mini">Мои скилы</p>
          <h1 className="heading_primary">
            Можете посмотреть все
            <span className="text-yellow-300"> технологии</span> которыми я обладаю
          </h1>
          <p className="text-[18px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]">
            Я fullstack-разработчик с опытом работы на React, Next.js и TypeScript. Разрабатываю
            надёжные серверные решения и современные интерфейсы, которые остаются быстрыми, удобными
            и отзывчивыми под высокой нагрузкой.
          </p>
          <Link to="projects" smooth={true} duration={500} className="nav_link">
            {' '}
            <button className="relative flex h-[50px]  w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2x1 transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
              <span className="relative z-10">Читать далее</span>
            </button>
          </Link>
        </div>
        <div className="col-span-4">
          <div
            data-aos="fade-left"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center"
          >
            <div>
              <SkillCard title="JavaScript" image="/images/js-logo.svg" />
            </div>
            <div>
              <SkillCard title="React" image="/images/react-logo.svg" />
            </div>
            <div>
              <SkillCard title="Node JS" image="/images/nextjs.svg" />
            </div>

            <div>
              <SkillCard title="Typescript" image="/images/ts-logo.svg" />
            </div>
            <div>
              <SkillCard title="Linux" image="/images/linux-logo.svg" />
            </div>
            <div>
              <SkillCard title="Git" image="/images/git-logo.svg" />
            </div>
            <div>
              <SkillCard title="Docker" image="/images/docker.svg" />
            </div>
            <div>
              <SkillCard title="Node JS" image="/images/nodejs.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
