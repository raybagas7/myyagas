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
          <a
            target="_blank"
            title="Website"
            rel="noopener noreferrer"
            href={weblink}
          >
            <li
              className="text-2xl w-fit h-fit p-2 rounded-full hover:text-blue-500 cursor-pointer
      hover:bg-white hover:drop-shadow transition duration-300
      max-lg:p-1.5 max-lg:text-xl"
            >
              <FiLink2 />
            </li>
          </a>
        ) : null}
        {youtube !== null ? (
          <a
            target="_blank"
            title="Youtube"
            rel="noopener noreferrer"
            href={youtube}
          >
            <li
              className="text-2xl w-fit h-fit p-2 rounded-full hover:text-red-500 cursor-pointer
      hover:bg-white hover:drop-shadow transition duration-300
      max-lg:p-1.5 max-lg:text-xl"
            >
              <FaYoutube />
            </li>
          </a>
        ) : null}
        {gitbe !== null ? (
          <a
            target="_blank"
            title="Github Backend"
            rel="noopener noreferrer"
            href={gitbe}
          >
            <li
              className="text-2xl w-fit h-fit p-2 rounded-full hover:text-red-500 cursor-pointer
      hover:bg-white hover:drop-shadow transition duration-300
      max-lg:p-1.5 max-lg:text-xl"
            >
              <FaGitAlt />
            </li>
          </a>
        ) : null}
        {gitfe !== null ? (
          <a
            target="_blank"
            title="Github FrontEnd"
            rel="noopener noreferrer"
            href={gitfe}
          >
            <li
              className="text-2xl w-fit h-fit p-2 text-blue-500 rounded-full hover:text-red-500 cursor-pointer
      hover:bg-white hover:drop-shadow transition duration-300
      max-lg:p-1.5 max-lg:text-xl"
            >
              <FaGitAlt />
            </li>
          </a>
        ) : null}
      </ul>
    </div>
  );
};

export default LinkProject;
