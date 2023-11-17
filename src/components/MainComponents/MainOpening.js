import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openingActions } from "../../store/opening.slice";
import ProfileInfoContainer from "../Profile Info Components/ProfileInfoContainer";

const MainOpening = () => {
  const dispatch = useDispatch();
  const lineShrink = useSelector((state) => state.opening.lineShrink);
  const circlePop = useSelector((state) => state.opening.circlePop);
  const openGate = useSelector((state) => state.opening.openGate);
  const opening = useSelector((state) => state.opening.opening);

  const handleToggleOpen = (e) => {
    e.preventDefault();

    dispatch(openingActions.toggleFirstOpen());

    setTimeout(() => {
      dispatch(openingActions.toggleOpenGate());
    }, 1500);

    setTimeout(() => {
      dispatch(openingActions.toggleOpening());
    }, 2500);
  };

  return (
    <div
      className={`h-screen min-h-screen relative  bg-gradient-to-b from-purple-fancy via-purple-500 to-pink-500
      max-lg:h-fit
    ${opening ? "p-5 max-sm:p-2" : null}`}
    >
      {opening ? (
        <ProfileInfoContainer />
      ) : (
        <>
          <div className="absolute h-full w-full flex justify-center items-center">
            <div
              className={`w-full h-3 bg-gold-fancy origin-right
              max-lg:h-2
        ${lineShrink ? "animate-shrink_line rounded-l-full" : null}`}
            ></div>
            <div
              onClick={handleToggleOpen}
              className={`circle-button flex justify-center items-center cursor-pointer bg-gradient-to-t from-[#751a13] to-[#eb1f24] shrink-0 rounded-full w-40 h-40
          hover:animate-bigger_bouncing
          max-lg:w-24 max-lg:h-24
        ${
          circlePop
            ? "animate-fade_out_quantum_bouncing hover:animate-fade_out_quantum_bouncing animation-delay-200 hover:animation-delay-200"
            : "animate-default_quantum_bouncing"
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
        ${lineShrink ? "animate-shrink_line rounded-r-full" : null}`}
            ></div>
          </div>
          <div
            className={`bg-gradient-to-b from-purple-dark-fancy to-[#712cca] h-half-screen origin-top
      ${openGate ? "animate-rolled_div" : null}`}
          ></div>
          <div
            className={`bg-gradient-to-t from-purple-dark-fancy to-[#712cca] h-half-screen origin-bottom
      ${openGate ? "animate-rolled_div" : null}`}
          ></div>
        </>
      )}
    </div>
  );
};

export default MainOpening;
