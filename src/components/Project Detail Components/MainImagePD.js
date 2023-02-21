import React from 'react';
import useDebounce from '../../hooks/useDebounce';

const MainImagePD = ({ mainImgData }) => {
  const debounceUrl = useDebounce(mainImgData, 300);
  // console.log(debounceUrl);
  return mainImgData.type === 'website' ? (
    <div
      className="h-full w-[60%] bg-white drop-shadow-md rounded-xl
    max-lg:w-[100%] max-lg:p-3"
    >
      <div className="flex justify-center items-center h-full w-full">
        <img
          key={debounceUrl.id}
          className="h-[300px] animate-brightness_bright bg-teal-400 w-[560px] object-cover rounded-xl drop-shadow-md
          max-2xl:h-[200px] max-2xl:w-[370px]
          max-xl:h-[150px] max-xl:w-[280px]
          max-lg:h-[200px] max-lg:w-[370px]
          max-sm:h-[150px] max-sm:w-[280px]"
          src={`${debounceUrl.imageUrl}`}
          alt="main-img"
        ></img>
        {/* <div className="h-96 w-[720px] bg-cover rounded-xl drop-shadow-md"></div> */}
      </div>
    </div>
  ) : (
    <div
      className="h-full w-[60%] bg-white drop-shadow-md rounded-xl
    max-lg:w-[100%] max-lg:p-3"
    >
      <div className="flex justify-center items-center h-full w-full">
        <img
          key={debounceUrl.id}
          className="h-[300px] animate-brightness_bright w-[560px] object-contain bg-black-steam rounded-xl drop-shadow-md
          max-2xl:h-[200px] max-2xl:w-[370px]
          max-xl:h-[150px] max-xl:w-[280px]
          max-lg:h-[200px] max-lg:w-[370px]"
          src={`${debounceUrl.imageUrl}`}
          alt="main-img"
        ></img>
        {/* <div className="h-96 w-[720px] bg-cover rounded-xl drop-shadow-md"></div> */}
      </div>
    </div>
  );
};

export default MainImagePD;
