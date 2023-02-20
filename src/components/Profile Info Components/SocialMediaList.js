import React from 'react';
import { FiGithub, FiTwitter, FiMail, FiLinkedin } from 'react-icons/fi';
import { RxDiscordLogo } from 'react-icons/rx';
import Swal from 'sweetalert2';

const SocialMediaList = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });

  const showAlert = () => {
    navigator.clipboard.writeText('raysam.gas@gmail.com');
    Toast.fire({
      icon: 'success',
      title: `Email Copied "raysam.gas@gmail.com"`,
    });
  };

  return (
    <div className="flex-1 p-3">
      <ul className="text-xl flex justify-evenly w-full h-fit">
        <li className="flex items-center relative">
          <a
            target="_blank"
            title="Github"
            rel="noopener noreferrer"
            className="hover:text-white hover:bg-black rounded-full p-2 transition duration-300 hover:drop-shadow"
            href="https://github.com/raybagas7"
          >
            <FiGithub className="max-2xl:w-3.5 max-2xl:h-3.5" />
          </a>
        </li>
        <li className="bg-white flex items-center">
          <a
            target="_blank"
            title="LinkedIn"
            rel="noopener noreferrer"
            className="hover:text-white hover:bg-blue-linked rounded-full p-2 transition duration-300 hover:drop-shadow"
            href="https://linkedin.com/in/agas77"
          >
            <FiLinkedin className="max-2xl:w-3.5 max-2xl:h-3.5" />
          </a>
        </li>
        <li className="bg-white flex items-center">
          <a
            target="_blank"
            title="Twitter"
            rel="noopener noreferrer"
            className="hover:text-white hover:bg-blue-twitter rounded-full p-2 transition duration-300 hover:drop-shadow"
            href="https://twitter.com/myyagas"
          >
            <FiTwitter className="max-2xl:w-3.5 max-2xl:h-3.5" />
          </a>
        </li>
        <li className="bg-white flex items-center">
          <a
            target="_blank"
            title="Discord"
            rel="noopener noreferrer"
            className="hover:text-white hover:bg-blue-discord rounded-full p-2 transition duration-300 hover:drop-shadow"
            href="https://dsc.bio/agas"
          >
            <RxDiscordLogo className="max-2xl:w-3.5 max-2xl:h-3.5" />
          </a>
        </li>
        <li className="bg-white flex items-center">
          <button
            onClick={showAlert}
            title="Email"
            className="hover:text-white hover:bg-black rounded-full p-2 transition duration-300 hover:drop-shadow"
          >
            <FiMail className="max-2xl:w-3.5 max-2xl:h-3.5" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaList;
