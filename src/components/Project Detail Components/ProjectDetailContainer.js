import React from 'react';
import MainImagePD from './MainImagePD';

const ProjectDetailContainer = () => {
  return (
    <div className="w-full flex gap-2 h-full">
      <MainImagePD />
      <div className="bg-white flex-1 rounded-xl flex-wrap flex-col flex justify-center items-center">
        <h2 className="text-xl p-2 bg-purple-dark-fancy drop-shadow-md text-white rounded-xl ">
          Preview
        </h2>
        <div className="w-96 h-64 justify-evenly items-center flex flex-wrap">
          <div className="h-24 w-44 bg-gold-fancy transition duration-300 hover:drop-shadow-md rounded-xl brightness-75 hover:brightness-100 cursor-pointer"></div>
          <div className="h-24 w-44 bg-gold-fancy transition duration-300 hover:drop-shadow-md rounded-xl brightness-75 hover:brightness-100 cursor-pointer"></div>
          <div className="h-24 w-44 bg-gold-fancy transition duration-300 hover:drop-shadow-md rounded-xl brightness-75 hover:brightness-100 cursor-pointer"></div>
          <div className="h-24 w-44 bg-gold-fancy transition duration-300 hover:drop-shadow-md rounded-xl brightness-75 hover:brightness-100 cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailContainer;
