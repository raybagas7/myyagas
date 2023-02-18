import React from 'react';

const ProjectFullDescription = ({ about }) => {
  return (
    <div className="bg-white border-2 border-black-steam/20 shadow-md w-[640px] h-[250px] rounded-xl p-3 overflow-auto">
      {/* <p className="text-justify">{about}</p> */}
      <div
        className="text-justify flex flex-col gap-2 p-2"
        dangerouslySetInnerHTML={{ __html: about }}
      ></div>
    </div>
  );
};

export default ProjectFullDescription;
