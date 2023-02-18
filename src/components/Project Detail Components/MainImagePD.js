import React from 'react';
import useDebounce from '../../hooks/useDebounce';

const MainImagePD = ({ mainImgData }) => {
  const debounceUrl = useDebounce(mainImgData, 300);
  // console.log(debounceUrl);
  return mainImgData.type === 'website' ? (
    <div className="h-full w-[60%] bg-white drop-shadow-md rounded-xl">
      <div className="flex justify-center items-center h-full w-full">
        <img
          key={debounceUrl.id}
          className="h-[30 q0px] animate-brightness_bright bg-teal-400 w-[560px] object-cover rounded-xl drop-shadow-md"
          src={`${debounceUrl.imageUrl}`}
          alt="main-img"
        ></img>
        {/* <div className="h-96 w-[720px] bg-cover rounded-xl drop-shadow-md"></div> */}
      </div>
    </div>
  ) : (
    <div className="h-full w-[60%] bg-white drop-shadow-md rounded-xl">
      <div className="flex justify-center items-center h-full w-full">
        <img
          key={debounceUrl.id}
          className="h-96 animate-brightness_bright w-[720px] object-contain bg-black-steam rounded-xl drop-shadow-md"
          src={`${debounceUrl.imageUrl}`}
          alt="main-img"
        ></img>
        {/* <div className="h-96 w-[720px] bg-cover rounded-xl drop-shadow-md"></div> */}
      </div>
    </div>
  );
};

export default MainImagePD;
