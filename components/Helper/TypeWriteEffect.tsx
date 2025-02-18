import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypeWriteEffect = () => {
	return (
		<TypeAnimation
			sequence={[
				// Same substring at the start will only be typed out once, initially
				'немного программист',
				1000, // wait 1s before replacing "Mice" with "Hamsters"
				'немного шпрехен инглиш',
				1000,
				'немного музыкант',
				1000,
				'немного романтик',
				1000,
				'больше чем немного',
				1000,
			]}
			wrapper='span'
			speed={50}
			className='x1:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] 
      text-white font-bold'
			repeat={Infinity}
		/>
	)
}

export default TypeWriteEffect
