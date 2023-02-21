import React, { useState } from 'react';
import ProjectDetailContainer from '../Project Detail Components/ProjectDetailContainer';
import ProjectInfoContainer from '../Project Info Components/ProjectInfoContainer';
import ImportantToKnow from './ImportantToKnow';
import SocialMediaList from './SocialMediaList';
import { imageDataPokeCard } from '../../utils/imageData';
import ProjectDetailDescriptionContainer from '../Project Detail Description Components/ProjectDetailDescriptionContainer';

const ProfileInfoContainer = () => {
  const [preview, setPreview] = useState(imageDataPokeCard());

  const changePreview = (newPreview) => {
    setPreview(newPreview);
  };

  // if (initializing) {
  //   return null;
  // }

  return (
    <div
      className="w-full h-full bg-purple-light-fancy/30 rounded-xl gap-3 flex backdrop-blur p-5
    max-lg:flex-col max-lg:overflow-auto
    max-sm:p-2"
    >
      <div
        className="shrink-0 bg-white/50 flex flex-col w-460 overflow-auto rounded-xl p-5
      max-2xl:w-[360px]
      max-lg:w-full max-lg:items-center
      max-sm:p-2"
      >
        <div
          className="w-full flex flex-col h-64 drop-shadow-md bg-white rounded-xl mb-3
        max-lg:w-460
        max-sm:w-full max-sm:h-60"
        >
          <p
            className="p-2.5 bg-purple-dark-fancy text-white rounded-t-xl text-center text-lg
          max-2xl:text-base"
          >
            Ray Samudra Bagas Daniarsyah
          </p>
          <div className="flex-1 flex rounded-b-xl">
            <div className="p-3 h-full w-fit flex justify-center items-center">
              <img
                className="w-32 h-32 rounded-full drop-shadow
                max-2xl:w-24 max-2xl:h-24"
                src="https://pokecard-agas.s3.ap-southeast-1.amazonaws.com/pp-poke-tIODjLwH7XrMyHu5"
                alt="agas_img"
              />
            </div>
            <div className="flex flex-1 h-fit flex-col">
              <SocialMediaList />
              <ImportantToKnow />
            </div>
          </div>
        </div>
        <div></div>
        <p
          className="p-2.5 bg-purple-dark-fancy text-white rounded-t-xl text-center text-lg
        max-2xl:text-base
        max-lg:w-full max-lg:min-w-[460px]
        max-sm:min-w-full"
        >
          My Project
        </p>
        <div
          className="h-full flex flex-col w-full min-h-half-screen bg-white overflow-auto no-scrollbar rounded-b-xl
         max-lg:min-w-[460px]
         max-sm:min-w-full"
        >
          <div
            className="p-3 flex-1
          max-2xl:p-1"
          >
            <ProjectInfoContainer changePreview={changePreview} />
          </div>
        </div>
      </div>
      <div
        className="bg-white/50 flex flex-col gap-2 flex-2 rounded-xl p-5 overflow-auto
      max-sm:p-2"
      >
        <div
          key={preview[0].id}
          className="w-full h-[500px] bg-white/50 rounded-xl p-3
          max-lg:h-fit
          max-sm:p-0 max-sm:bg-transparent"
        >
          <ProjectDetailContainer preview={preview} />
        </div>
        <div
          className="bg-white/50 flex-1 rounded-xl p-3
        max-sm:p-0 max-sm:bg-transparent"
        >
          <ProjectDetailDescriptionContainer
            about={preview[0].about}
            frameworks={preview[0].frameworks}
            weblink={preview[0].link}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoContainer;
