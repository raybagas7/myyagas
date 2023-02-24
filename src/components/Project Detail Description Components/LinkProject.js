import React from 'react';
import { FaGitAlt } from 'react-icons/fa';
import { FiLink2 } from 'react-icons/fi';
import { FaYoutube } from 'react-icons/fa';

const LinkProject = ({ weblink, youtube, gitbe, gitfe }) => {
  return (
    <div className="w-fit">
      <ul
        className="flex gap-2 items-center border-2 animate-visit_default hover:animate-expand_visit border-purple-dark-fancy shadow-md w-16 overflow-hidden rounded-full pr-2
      max-lg:w-14 max-lg:animate-visit_default_lg max-lg:hover:animate-expand_visit_lg"
      >
        <div className="bg-purple-dark-fancy border-r-2 border-purple-dark-fancy">
          <p className="bg-purple-dark-fancy cursor-default p-3 w-fit text-center text-white rounded-full max-lg:text-xs">
            VISIT
          </p>
        </div>
        {/* <li
        className="text-3xl w-fit h-fit p-2 rounded-full hover:text-red-fancy cursor-pointer
      hover:bg-white hover:drop-shadow transition duration-300"
      >
        <FaGitAlt />
      </li> */}
        {weblink !== null ? (
          <li
            className="text-2xl w-fit h-fit p-2 rounded-full hover:text-blue-500 cursor-pointer
      hover:bg-white hover:drop-shadow transition duration-300
      max-lg:p-1.5 max-lg:text-xl"
          >
            <a
              target="_blank"
              title="Website"
              rel="noopener noreferrer"
              href={weblink}
            >
              <FiLink2 />
            </a>
          </li>
        ) : null}
        {youtube !== null ? (
          <li
            className="text-2xl w-fit h-fit p-2 rounded-full hover:text-red-500 cursor-pointer
      hover:bg-white hover:drop-shadow transition duration-300
      max-lg:p-1.5 max-lg:text-xl"
          >
            <a
              target="_blank"
              title="Youtube"
              rel="noopener noreferrer"
              href={youtube}
            >
              <FaYoutube />
            </a>
          </li>
        ) : null}
        {gitbe !== null ? (
          <li
            className="text-2xl w-fit h-fit p-2 rounded-full hover:text-red-500 cursor-pointer
      hover:bg-white hover:drop-shadow transition duration-300
      max-lg:p-1.5 max-lg:text-xl"
          >
            <a
              target="_blank"
              title="Github Backend"
              rel="noopener noreferrer"
              href={gitbe}
            >
              <FaGitAlt />
            </a>
          </li>
        ) : null}
        {gitfe !== null ? (
          <li
            className="text-2xl w-fit h-fit p-2 text-blue-500 rounded-full hover:text-red-500 cursor-pointer
      hover:bg-white hover:drop-shadow transition duration-300
      max-lg:p-1.5 max-lg:text-xl"
          >
            <a
              target="_blank"
              title="Github FrontEnd"
              rel="noopener noreferrer"
              href={gitfe}
            >
              <FaGitAlt />
            </a>
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default LinkProject;
