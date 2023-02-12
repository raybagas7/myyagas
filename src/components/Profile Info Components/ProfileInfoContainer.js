import React, { useState } from 'react';
import ProjectDetailContainer from '../Project Detail Components/ProjectDetailContainer';
import ProjectInfoContainer from '../Project Info Components/ProjectInfoContainer';
import ImportantToKnow from './ImportantToKnow';
import SocialMediaList from './SocialMediaList';
import { imageDataPokeCard, imageDataSimpleNote } from '../../utils/imageData';

const ProfileInfoContainer = () => {
  const [preview, setPreview] = useState(imageDataPokeCard());
  // const [imageData, setImageData] = useState();
  // const [initializing, setInitializing] = React.useState(true);

  // useEffect(() => {
  //   setImageData(imageDataPokeCard());
  //   setInitializing(false);
  // }, []);

  const changePreview = (newPreview) => {
    setPreview(newPreview);
  };

  // if (initializing) {
  //   return null;
  // }

  return (
    <div className="w-full h-full bg-purple-light-fancy/30 rounded-xl gap-3 flex backdrop-blur p-5">
      <div className="shrink-0 bg-white/50 flex flex-col w-460 overflow-auto rounded-xl p-5">
        <div className="w-full flex flex-col h-64 drop-shadow-md bg-white rounded-xl mb-3">
          <p className="p-2.5 bg-purple-dark-fancy text-white rounded-t-xl text-center text-lg">
            Ray Samudra Bagas Daniarsyah
          </p>
          <div className="flex-1 flex rounded-b-xl">
            <div className="p-3 h-full w-fit flex justify-center items-center">
              <img
                className="w-32 h-32 rounded-full drop-shadow"
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
        <p className="p-2.5 bg-purple-dark-fancy text-white rounded-t-xl text-center text-lg">
          My Project
        </p>
        <div className="h-full flex flex-col w-full min-h-half-screen bg-white overflow-auto no-scrollbar rounded-b-xl">
          <div className="p-3 flex-1">
            <ProjectInfoContainer changePreview={changePreview} />
          </div>
        </div>
      </div>
      <div className="bg-white/50 flex-2 rounded-xl p-5">
        <div
          key={preview[0].id}
          className="w-full h-[500px] bg-white/50 rounded-xl p-3"
        >
          <ProjectDetailContainer preview={preview} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoContainer;
