import React from 'react';
import SocialMediaList from './SocialMediaList';

const ProfileInfoContainer = () => {
  return (
    <div className="w-full h-full bg-purple-light-fancy/30 rounded-xl gap-3 flex backdrop-blur p-5">
      <div className="shrink-0 bg-white/50 w-460 overflow-auto rounded-xl p-5">
        <div className="w-full flex flex-col h-56 drop-shadow-md bg-white rounded-xl">
          <p className="p-2.5 bg-purple-dark-fancy text-white rounded-t-xl text-center">
            Profile Informations
          </p>
          <div className="flex-1 flex rounded-b-xl">
            <div className="p-3 h-full w-fit flex justify-center items-center">
              <img
                className="w-32 h-32 rounded-full"
                src="https://pokecard-agas.s3.ap-southeast-1.amazonaws.com/pp-poke-tIODjLwH7XrMyHu5"
                alt="agas_img"
              />
            </div>
            <div className="flex flex-1 h-fit flex-col">
              <SocialMediaList />
              <div className="p-3 pt-0 text-xs indent-4">
                <p>Ray Samudra Bagas Daniarsyah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white/50 flex-2 rounded-xl"></div>
    </div>
  );
};

export default ProfileInfoContainer;
