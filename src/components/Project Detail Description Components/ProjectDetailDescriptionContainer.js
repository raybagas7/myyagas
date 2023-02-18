import React from 'react';
import FrameworkDisplay from './FrameworkDisplay';
import LinkProject from './LinkProject';
import ProjectFullDescription from './ProjectFullDescription';

const ProjectDetailDescriptionContainer = ({ about, frameworks, weblink }) => {
  // console.log(Object.keys(frameworks));
  // console.log(frameworks);
  return (
    <section className="w-full h-full bg-white flex gap-2 rounded-xl p-5">
      <div className="w-fit h-fit flex flex-col gap-3">
        <ProjectFullDescription about={about} />
        <LinkProject weblink={weblink} />
      </div>
      <div className="bg-white border-2 flex flex-col gap-2 p-2 border-black-steam/20 shadow-md w-full h-full rounded-xl">
        {frameworks.map((framework) => (
          <FrameworkDisplay
            framework={framework}
            key={Object.keys(framework)[0]}
          />
        ))}
        {/* <FrameworkDisplay />
        <FrameworkDisplay />
        <FrameworkDisplay /> */}
      </div>
    </section>
  );
};

export default ProjectDetailDescriptionContainer;
