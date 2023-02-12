import React from 'react';

const ImagePreview = ({ url, position, changeMainImage }) => {
  const onChangeImage = () => {
    changeMainImage(position);
  };

  const onChangeImageDefault = () => {
    changeMainImage(0);
  };
  return (
    <button>
      <img
        onMouseEnter={onChangeImage}
        onMouseLeave={onChangeImageDefault}
        //   onMouseOut={changeMainImage(
        //     'https://live.staticflickr.com/65535/52677504962_4ea3f192b1_b.jpg'
        //   )}
        className="h-24 w-44 transition duration-300 hover:drop-shadow-lg rounded-xl brightness-90 hover:brightness-100 cursor-pointer"
        alt="preview-1"
        src={`${url}`}
      />
    </button>
  );
};

export default ImagePreview;
