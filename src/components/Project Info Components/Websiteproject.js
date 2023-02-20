import React, { useRef } from 'react';
import { imageDataPokeCard, imageDataSimpleNote } from '../../utils/imageData';

const Websiteproject = ({ changePreview }) => {
  //I will make component stand alone/separated
  const myRef = useRef(null);
  const myRef2 = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  const executeScroll2 = () =>
    myRef2.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });

  const pokeCard = imageDataPokeCard();
  // console.log(pokeCard);
  const simpleNote = imageDataSimpleNote();
  const changeToPokeCard = () => {
    changePreview(pokeCard);
    executeScroll2();
  };
  const changeToSimpleNote = () => {
    changePreview(simpleNote);
    executeScroll();
  };
  return (
    <div className="bg-white drop-shadow-md rounded-xl relative website-project-container">
      <p className="p-1.5 bg-gold-fancy text-sm text-black-steam rounded-t-xl text-center">
        Website
      </p>
      <div
        className="p-3 text-sm flex somein overflow-auto gap-2 snap-x hover:scroll-auto
      max-lg:justify-center"
      >
        <div className="ml-[15%]"></div>
        <div
          ref={myRef2}
          onClick={changeToPokeCard}
          className="bg-black-steam w-64 h-36 rounded-xl drop-shadow-md shrink-0 snap-always snap-center 
        bg-pokecard-bg bg-cover cursor-pointer
        hover:shadow-md transition duration-300
        max-2xl:w-48 max-2xl:h-28"
        ></div>
        <div
          ref={myRef}
          onClick={changeToSimpleNote}
          className="bg-orange-fancy w-64 h-36 rounded-xl drop-shadow-md shrink-0 snap-always snap-center 
        bg-simplenote-bg bg-cover cursor-pointer
        hover:shadow-md transition duration-300
        max-2xl:w-48 max-2xl:h-28"
        ></div>
        <div className="mr-[15%]"></div>
        {/* <div className="w-[15%] h-36 absolute left-0 bg-white/20 backdrop-blur-sm"></div>
        <div className="w-[15%] h-36 absolute right-0 bg-white/20 backdrop-blur-sm"></div> */}
      </div>
    </div>
  );
};

export default Websiteproject;
