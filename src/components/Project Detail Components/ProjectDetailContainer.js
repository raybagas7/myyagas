import React, { useState } from 'react';
// import { imageDataPokeCard } from '../../utils/imageData';
import ImagePreview from './ImagePreview';
import MainImagePD from './MainImagePD';

const ProjectDetailContainer = ({ preview }) => {
  const urlPool = preview;
  const [mainImgData, setMainImageData] = useState(urlPool[0]);

  const changeMainImage = (newPosition) => {
    setMainImageData(urlPool[newPosition]);
  };

  return (
    <div className="w-full flex gap-2 h-full">
      <MainImagePD mainImgData={mainImgData} />
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
              type={image.type}
              changeMainImage={changeMainImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailContainer;
