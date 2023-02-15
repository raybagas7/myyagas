import React from 'react';
import LinkProject from './LinkProject';
import ProjectFullDescription from './ProjectFullDescription';

const ProjectDetailDescriptionContainer = () => {
  return (
    <section className="w-full h-full bg-white flex gap-2 rounded-xl p-5">
      <div className="w-fit h-fit flex flex-col gap-3">
        <ProjectFullDescription />
        <LinkProject />
      </div>
      <div className="bg-white border-2 flex flex-col gap-2 p-2 border-black-steam/20 shadow-md w-full h-full rounded-xl">
        <div className="bg-white drop-shadow-md flex-1 rounded-xl">
          <p className="bg-purple-dark-fancy rounded-t-xl text-sm p-1 text-center text-white">
            FrontEnd
          </p>
        </div>
        <div className="bg-white drop-shadow-md flex-1 rounded-xl">
          <p className="bg-purple-dark-fancy rounded-t-xl text-sm p-1 text-center text-white">
            BackEnd
          </p>
        </div>
        <div className="bg-white drop-shadow-md flex-1 rounded-xl">
          <p className="bg-purple-dark-fancy rounded-t-xl text-sm p-1 text-center text-white">
            Others
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailDescriptionContainer;
