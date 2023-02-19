import React from 'react';

const ImagePreview = ({ url, position, changeMainImage, type }) => {
  const onChangeImage = () => {
    changeMainImage(position);
  };

  const onChangeImageDefault = () => {
    changeMainImage(0);
  };
  return type === 'website' ? (
    <button>
      <img
        onMouseEnter={onChangeImage}
        onMouseLeave={onChangeImageDefault}
        className="h-24 w-44 transition duration-300 hover:drop-shadow-lg rounded-xl 
        object-contain brightness-90 hover:brightness-100 cursor-pointer
        max-2xl:h-20 max-2xl:w-40"
        alt="preview-1"
        src={`${url}`}
      />
    </button>
  ) : (
    <button>
      <img
        onMouseEnter={onChangeImage}
        onMouseLeave={onChangeImageDefault}
        className="h-24 w-44 transition duration-300 hover:drop-shadow-lg rounded-xl 
        object-contain bg-black-steam/90 brightness-90 hover:brightness-100 hover:bg-black-steam cursor-pointer
        max-2xl:h-20 max-2xl:w-40"
        alt="preview-1"
        src={`${url}`}
      />
    </button>
  );
};

export default ImagePreview;
