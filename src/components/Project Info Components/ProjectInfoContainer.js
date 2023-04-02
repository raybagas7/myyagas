import React from 'react';
import AndroidProject from './AndroidProject';
import LifeProject from './LifeProject';
import Websiteproject from './Websiteproject';
import { useDispatch, useSelector } from 'react-redux';
import { previewActions } from '../../store/preview.slice';

const ProjectInfoContainer = ({ changePreview }) => {
  const dispatch = useDispatch();
  const animate = useSelector((state) => state.preview.showAnimation);

  const hideAnimation = () => {
    dispatch(previewActions.hideAnimation());
    console.log('mwewe');
  };
  return (
    <div
      className="bg-white rounded-xl flex gap-5 flex-col p-1"
      {...(animate && { onMouseEnter: () => hideAnimation() })}
    >
      <Websiteproject changePreview={changePreview} />
      <AndroidProject changePreview={changePreview} />
      <LifeProject />
    </div>
  );
};

export default ProjectInfoContainer;
