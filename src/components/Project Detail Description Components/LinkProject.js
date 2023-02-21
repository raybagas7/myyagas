import React from 'react';
// import { FaGitAlt } from 'react-icons/fa';
import { FiLink2 } from 'react-icons/fi';
import { FaYoutube } from 'react-icons/fa';

const LinkProject = ({ weblink, youtube }) => {
  return (
    <ul className="p-1 flex gap-1">
      {/* <li
        className="text-3xl w-fit h-fit p-2 rounded-full hover:text-red-fancy cursor-pointer
      hover:bg-white hover:drop-shadow transition duration-300"
      >
        <FaGitAlt />
      </li> */}

      {weblink === null ? (
        <li
          className="text-3xl w-fit h-fit p-2 rounded-full hover:text-red-500 cursor-pointer
      hover:bg-white hover:drop-shadow transition duration-300"
        >
          <a
            target="_blank"
            title="Website"
            rel="noopener noreferrer"
            href={youtube}
          >
            <FaYoutube href={youtube} />
          </a>
        </li>
      ) : null}

      {youtube === null ? (
        <li
          className="text-3xl w-fit h-fit p-2 rounded-full hover:text-blue-500 cursor-pointer
      hover:bg-white hover:drop-shadow transition duration-300"
        >
          <a
            target="_blank"
            title="Website"
            rel="noopener noreferrer"
            href={weblink}
          >
            <FiLink2 href={weblink} />
          </a>
        </li>
      ) : null}
    </ul>
  );
};

export default LinkProject;
