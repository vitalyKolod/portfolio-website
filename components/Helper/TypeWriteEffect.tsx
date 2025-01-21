import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeWriteEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "18 years old",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "a fronted developer",
        1000,
        "a sound engineer",
        1000,
        "a worship drummer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="x1:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] 
      text-white font-bold"
      repeat={Infinity}
    />
  );
};

export default TypeWriteEffect;
