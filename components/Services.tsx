import React from 'react'
import ServicesCard from './Helper/ServicesCard'

const Services = () => {
  const servicesData = [
    {
      title: 'Лендинги под ключ',
      num: '01',
      description:
        'Создание привлекательных и функциональных лендингов с использованием современных технологий для эффективного представления вашего продукта или услуги.',
    },
    {
      title: 'Многостраничные сайты',
      num: '02',
      description:
        'Разработка полноценный сайтов с удобной структурой и современным дизайном.Идеальный выбор для проектов, которым требуется контент, SEO и расширяемость',
    },
    {
      title: 'Автоматизация процессов',
      num: '03',
      description:
        'Создание умных решений для бизнеса с использованием API, ботов и интеграций. Автоматизация рутинных задач экономит время и повышает эффективность работы.',
    },
    {
      title: 'Разработка телеграм-ботов',
      num: '04',
      description:
        'Создание функциональных телеграм-ботов для автоматизации процессов, интеграций и улучшения взаимодействия с клиентами.Настраиваю удобные гибкие возможности для бизнеса.',
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
        'Поиск и устранение ошибок в коде для стабильной и безопасной работы приложения. Оптимизирую производительность, предотвращаю сбои и улучшаю опыт пользователей.',
    },
  ]

  return (
    <div id="services" className="pt-[5rem] pb-[3rem] bg-[#0b0c13]">
      <div className="text-center" data-aos="fade-up">
        <p className="heading_mini">Популярные услуги</p>
        <h1 className="heading_primary">
          Мои специальные <span className="text-yellow-300">услуги</span> для вас
        </h1>
      </div>
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        {servicesData.map((service) => (
          <div key={service.num} data-aos="fade-up">
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
