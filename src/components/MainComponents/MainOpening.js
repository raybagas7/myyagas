import React, { useState } from 'react';
import ProfileInfoContainer from '../Profile Info Components/ProfileInfoContainer';

const MainOpening = () => {
  const [lineShrink, setLineShrink] = useState(false);
  const [circlePop, setCirclePop] = useState(false);
  const [openGate, setOpenGate] = useState(false);
  const [opening, setOpening] = useState(false);

  const toggleOpen = () => {
    setCirclePop(true);
    setLineShrink(true);
    setTimeout(() => {
      setOpenGate(true);
    }, 1500);
    setTimeout(() => {
      setOpening(true);
    }, 2500);
  };
  return (
    <div
      className={`h-screen min-h-screen relative bg-main-bg bg-cover
      max-lg:h-fit
    ${opening ? 'p-5 max-sm:p-2' : null}`}
    >
      {opening ? (
        <ProfileInfoContainer />
      ) : (
        <>
          <div className="absolute h-full w-full flex justify-center items-center">
            <div
              className={`w-full h-3 bg-gold-fancy origin-right
              max-lg:h-2
        ${lineShrink ? 'animate-shrink_line rounded-l-full' : null}`}
            ></div>
            <div
              onClick={toggleOpen}
              className={`circle-button flex justify-center items-center cursor-pointer bg-gradient-to-t from-[#751a13] to-[#eb1f24] shrink-0 rounded-full w-40 h-40
          hover:animate-bigger_bouncing
          max-lg:w-24 max-lg:h-24
        ${
          circlePop
            ? 'animate-fade_out_quantum_bouncing hover:animate-fade_out_quantum_bouncing animation-delay-200 hover:animation-delay-200'
            : 'animate-default_quantum_bouncing'
        }`}
            >
              <img
                src="https://live.staticflickr.com/65535/52702584818_a7f6aeaeff_o.png"
                alt="myyagaslogo"
                className="w-28 h-28
                max-lg:w-16 max-lg:h-16"
              ></img>
            </div>
            <div
              className={`w-full h-3 bg-gold-fancy origin-left
              max-lg:h-2
        ${lineShrink ? 'animate-shrink_line rounded-r-full' : null}`}
            ></div>
          </div>
          <div
            className={`bg-gradient-to-b from-purple-dark-fancy to-[#712cca] h-half-screen origin-top
      ${openGate ? 'animate-rolled_div' : null}`}
          ></div>
          <div
            className={`bg-gradient-to-t from-purple-dark-fancy to-[#712cca] h-half-screen origin-bottom
      ${openGate ? 'animate-rolled_div' : null}`}
          ></div>
        </>
      )}
    </div>
  );
};

export default MainOpening;
