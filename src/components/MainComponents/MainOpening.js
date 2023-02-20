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
    }, 3500);
  };
  return (
    <div
      className={`h-screen relative bg-main-bg bg-cover
      max-lg:h-fit
    ${opening ? 'p-5' : null}`}
    >
      {opening ? (
        <ProfileInfoContainer />
      ) : (
        <>
          <div className="absolute h-full w-full flex justify-center items-center">
            <div
              className={`w-full h-3 bg-gold-fancy origin-right
        ${lineShrink ? 'animate-shrink_line rounded-l-full' : null}`}
            ></div>
            <div
              onClick={toggleOpen}
              className={`circle-button cursor-pointer bg-red-500 shrink-0 rounded-full w-40 h-40
          hover:animate-bigger_bouncing
        ${
          circlePop
            ? 'animate-fade_out_quantum_bouncing hover:animate-fade_out_quantum_bouncing animation-delay-200 hover:animation-delay-200'
            : 'animate-default_quantum_bouncing'
        }`}
            ></div>
            <div
              className={`w-full h-3 bg-gold-fancy origin-left
        ${lineShrink ? 'animate-shrink_line rounded-r-full' : null}`}
            ></div>
          </div>
          <div
            className={`bg-purple-dark-fancy h-half-screen origin-top
      ${openGate ? 'animate-rolled_div' : null}`}
          ></div>
          <div
            className={`bg-purple-dark-fancy h-half-screen origin-bottom
      ${openGate ? 'animate-rolled_div' : null}`}
          ></div>
        </>
      )}
      {/* <div className="absolute h-full w-full flex justify-center items-center">
        <div
          className={`w-full h-3 bg-gold-fancy origin-right
        ${lineShrink ? 'animate-shrink_line rounded-l-full' : null}`}
        ></div>
        <div
          onClick={toggleOpen}
          className={`circle-button cursor-pointer bg-red-500 shrink-0 rounded-full w-40 h-40
          hover:animate-bigger_bouncing
        ${
          circlePop
            ? 'animate-fade_out_quantum_bouncing hover:animate-fade_out_quantum_bouncing animation-delay-500 hover:animation-delay-500'
            : 'animate-default_quantum_bouncing'
        }`}
        ></div>
        <div
          className={`w-full h-3 bg-gold-fancy origin-left
        ${lineShrink ? 'animate-shrink_line rounded-r-full' : null}`}
        ></div>
      </div>
      <div
        className={`bg-purple-dark-fancy h-half-screen origin-top
      ${openGate ? 'animate-rolled_div' : null}`}
      ></div>
      <div
        className={`bg-orange-fancy h-half-screen origin-bottom
      ${openGate ? 'animate-rolled_div' : null}`}
      ></div> */}
    </div>
  );
};

export default MainOpening;
