import React from 'react';
// import { FaGitAlt } from 'react-icons/fa';
import { FiLink2 } from 'react-icons/fi';

const LinkProject = ({ weblink }) => {
  return (
    <ul className="p-1 flex gap-1">
      {/* <li
        className="text-3xl w-fit h-fit p-2 rounded-full hover:text-red-fancy cursor-pointer
      hover:bg-white hover:drop-shadow transition duration-300"
      >
        <FaGitAlt />
      </li> */}
      {weblink === null ? null : (
        <li
          className="text-3xl w-fit h-fit p-2 rounded-full hover:text-white cursor-pointer
      hover:bg-black-steam hover:drop-shadow transition duration-300"
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
      )}
    </ul>
  );
};

export default LinkProject;
