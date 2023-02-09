import React from 'react';

const MainImagePD = () => {
  return (
    <div className="h-full w-[60%] bg-white drop-shadow-md rounded-xl">
      <div className="flex justify-center items-center h-full w-full">
        <img
          className="h-96 w-[720px] bg-cover rounded-xl drop-shadow-md"
          src="https://live.staticflickr.com/65535/52677504962_4ea3f192b1_b.jpg"
          alt="main-img"
        ></img>
        {/* <div className="h-96 w-[720px] bg-cover rounded-xl drop-shadow-md"></div> */}
      </div>
    </div>
  );
};

export default MainImagePD;
