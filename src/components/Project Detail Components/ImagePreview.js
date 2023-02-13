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
        //   onMouseOut={changeMainImage(
        //     'https://live.staticflickr.com/65535/52677504962_4ea3f192b1_b.jpg'
        //   )}
        className="h-24 w-44 transition duration-300 hover:drop-shadow-lg rounded-xl object-cover brightness-90 hover:brightness-100 cursor-pointer"
        alt="preview-1"
        src={`${url}`}
      />
    </button>
  ) : (
    <button>
      <img
        onMouseEnter={onChangeImage}
        onMouseLeave={onChangeImageDefault}
        //   onMouseOut={changeMainImage(
        //     'https://live.staticflickr.com/65535/52677504962_4ea3f192b1_b.jpg'
        //   )}
        className="h-24 w-44 transition duration-300 hover:drop-shadow-lg rounded-xl 
        object-contain bg-black-steam/90 brightness-90 hover:brightness-100 hover:bg-black-steam cursor-pointer"
        alt="preview-1"
        src={`${url}`}
      />
    </button>
  );
};

export default ImagePreview;
