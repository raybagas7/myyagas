import React, { useState } from 'react';
// import { imageDataPokeCard } from '../../utils/imageData';
import ImagePreview from './ImagePreview';
import MainImagePD from './MainImagePD';

const ProjectDetailContainer = ({ preview }) => {
  const urlPool = preview;
  const [mainImageUrl, setMainImageUrl] = useState(urlPool[0]);

  const changeMainImage = (newPosition) => {
    setMainImageUrl(urlPool[newPosition]);
  };

  return (
    <div className="w-full flex gap-2 h-full">
      <MainImagePD url={mainImageUrl} />
      <div className="bg-white flex-1 rounded-xl flex-wrap flex-col flex justify-center items-center">
        <h2 className="text-xl p-2 bg-purple-dark-fancy drop-shadow-md text-white rounded-xl ">
          Preview
        </h2>
        <div className="w-96 h-64 justify-evenly items-center flex flex-wrap">
          {urlPool.slice(1, 5).map((image) => (
            <ImagePreview
              key={image.id}
              url={image.imageUrl}
              position={image.id}
              changeMainImage={changeMainImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailContainer;
