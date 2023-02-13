import React, { useRef } from 'react';
import { imageDataDude, imageDataSmartWater } from '../../utils/imageData';

const AndroidProject = ({ changePreview }) => {
  const myRef = useRef(null);
  const myRef2 = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  const executeScroll2 = () =>
    myRef2.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });

  const smartWater = imageDataSmartWater();
  const dude = imageDataDude();

  const changeToSmartWater = () => {
    changePreview(smartWater);
    executeScroll2();
  };
  const changeToDude = () => {
    changePreview(dude);
    executeScroll();
  };
  return (
    <div className="bg-white drop-shadow-md rounded-xl relative">
      <p className="p-1.5 bg-gold-fancy text-sm text-black-steam rounded-t-xl text-center">
        Android
      </p>
      <div className="p-3 text-sm flex overflow-auto gap-2 snap-x hover:scroll-auto">
        <div className="ml-[15%]"></div>

        <div
          ref={myRef2}
          onClick={changeToSmartWater}
          className="bg-black-steam w-64 h-36 rounded-xl drop-shadow-md shrink-0 snap-always snap-center 
        bg-smartwater-bg bg-cover cursor-pointer
        hover:shadow-md transition duration-300"
        ></div>
        <div
          ref={myRef}
          onClick={changeToDude}
          className="bg-orange-fancy w-64 h-36 rounded-xl drop-shadow-md shrink-0 snap-always snap-center 
        bg-dude-bg bg-cover cursor-pointer
        hover:shadow-md transition duration-300"
        ></div>
        <div className="mr-[15%]"></div>
        {/* <div className="w-[15%] h-36 absolute left-0 bg-white/20 backdrop-blur-sm"></div>
        <div className="w-[15%] h-36 absolute right-0 bg-white/20 backdrop-blur-sm"></div> */}
      </div>
    </div>
  );
};

export default AndroidProject;
