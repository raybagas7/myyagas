import React from 'react';

const LifeProject = () => {
  return (
    <div className="bg-white drop-shadow-md rounded-xl relative">
      <p className="p-1.5 bg-gold-fancy text-sm text-black-steam rounded-t-xl text-center">
        Life
      </p>
      <div
        className="p-3 text-sm flex overflow-auto gap-2 snap-x hover:scroll-auto
      max-lg:justify-center
      max-sm:justify-start"
      >
        <div
          className="ml-[15%]
        max-sm:ml-[20%]"
        ></div>
        <div
          className="bg-black-steam w-64 h-36 rounded-xl drop-shadow-md shrink-0 snap-always snap-center
        max-2xl:w-48 max-2xl:h-28"
        ></div>
        <div
          className="bg-orange-fancy w-64 h-36 rounded-xl drop-shadow-md shrink-0 snap-always snap-center
        max-2xl:w-48 max-2xl:h-28"
        ></div>
        {/* <div
          className="bg-red-fancy w-64 h-36 rounded-xl drop-shadow-md shrink-0 snap-always snap-center
        max-2xl:w-48 max-2xl:h-28"
        ></div>
        <div
          className="bg-purple-dark-fancy w-64 h-36 rounded-xl drop-shadow-md shrink-0 snap-always snap-center
        max-2xl:w-48 max-2xl:h-28"
        ></div> */}
        <div
          className="mr-[15%]
        max-sm:mr-[20%]"
        ></div>
        {/* <div className="w-[15%] h-36 absolute left-0 bg-white/20 backdrop-blur-sm"></div>
        <div className="w-[15%] h-36 absolute right-0 bg-white/20 backdrop-blur-sm"></div> */}
      </div>
    </div>
  );
};

export default LifeProject;
