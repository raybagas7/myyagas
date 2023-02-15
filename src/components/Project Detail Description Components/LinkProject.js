import React from 'react';
import { FaGitAlt } from 'react-icons/fa';
import { FiLink2 } from 'react-icons/fi';

const LinkProject = () => {
  return (
    <ul className="p-1 flex gap-1">
      <li
        className="text-3xl w-fit h-fit p-2 rounded-full hover:text-red-fancy cursor-pointer
      hover:bg-white hover:drop-shadow transition duration-300"
      >
        <FaGitAlt />
      </li>
      <li
        className="text-3xl w-fit h-fit p-2 rounded-full hover:text-blue-500 cursor-pointer
      hover:bg-white hover:drop-shadow transition duration-300"
      >
        <FiLink2 />
      </li>
    </ul>
  );
};

export default LinkProject;
