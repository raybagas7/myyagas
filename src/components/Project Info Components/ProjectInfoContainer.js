import React from 'react';
import AndroidProject from './AndroidProject';
import LifeProject from './LifeProject';
import Websiteproject from './Websiteproject';

const ProjectInfoContainer = () => {
  return (
    <div className="bg-white rounded-xl flex gap-5 flex-col p-1">
      <Websiteproject />
      <AndroidProject />
      <LifeProject />
    </div>
  );
};

export default ProjectInfoContainer;
