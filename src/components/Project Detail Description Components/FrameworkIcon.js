import React from 'react';
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io5';
import {
  SiRabbitmq,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiAndroidstudio,
  SiFirebase,
  SiJava,
  SiRedux,
} from 'react-icons/si';
import { FaAws, FaNode } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { Icon } from '@iconify/react';
import ReactIconSVG from './ReactIconSVG';

const FrameworkIcon = ({ item }) => {
  // console.log(item);
  return (
    <div className="max-lg:p-1 max-lg:pt-3 max-lg:pb-3">
      {item === 'nodejs' ? (
        <FaNode
          title={item}
          className="w-7 h-7 hover:text-[#90c53f] transition duration-300 cursor-pointer
        max-2xl:w-4 max-2xl:h-4
        max-lg:w-7 max-lg:h-7
        max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'javascript' ? (
        <IoLogoJavascript
          title={item}
          className="w-7 h-7 hover:text-[#f0db4f] hover:bg-[#323330] transition duration-300 cursor-pointer
        max-2xl:w-4 max-2xl:h-4
        max-lg:w-7 max-lg:h-7
        max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'rabbitmq' ? (
        <SiRabbitmq
          title={item}
          className="w-7 h-7 transition duration-300 cursor-pointer hover:text-[#ff6600]
        max-2xl:w-4 max-2xl:h-4
        max-lg:w-7 max-lg:h-7
        max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'nodemailer' ? (
        <img
          src="https://nodemailer.com/nm_logo_200x136.png"
          alt="nodemailer"
          title={item}
          className="w-auto h-7 cursor-pointer
          max-2xl:w-4 max-2xl:h-4
          max-lg:w-7 max-lg:h-7
          max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'postgres' ? (
        <SiPostgresql
          title={item}
          className="w-7 h-7 transition duration-300 cursor-pointer hover:text-[#2f6792] 
        max-2xl:w-4 max-2xl:h-4
        max-lg:w-7 max-lg:h-7
        max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'reactjs' ? (
        <SiReact
          title={item}
          className="w-7 h-7 transition duration-300 cursor-pointer hover:text-[#61dbfb] 
        max-2xl:w-4 max-2xl:h-4
        max-lg:w-7 max-lg:h-7
        max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'html' ? (
        <IoLogoHtml5
          title={item}
          className="w-7 h-7 transition duration-300 cursor-pointer hover:text-[#e54c21] 
        max-2xl:w-4 max-2xl:h-4
        max-lg:w-7 max-lg:h-7
        max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'css' ? (
        <IoLogoCss3
          title={item}
          className="w-7 h-7 transition duration-300 cursor-pointer hover:text-[#264de4] 
        max-2xl:w-4 max-2xl:h-4
        max-lg:w-7 max-lg:h-7
        max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'tailwind' ? (
        <SiTailwindcss
          title={item}
          className="w-7 h-7 transition duration-300 cursor-pointer hover:text-[#38bdf8] 
        max-2xl:w-4 max-2xl:h-4
        max-lg:w-7 max-lg:h-7
        max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'reacticon' ? (
        <ReactIconSVG
          title={item}
          className="w-7 h-7 cursor-pointer
        max-2xl:w-4 max-2xl:h-4
        max-lg:w-7 max-lg:h-7
        max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'aws' ? (
        <FaAws
          title={item}
          className="w-7 h-7 transition duration-300 cursor-pointer hover:text-[#ff9a00]
        max-2xl:w-4 max-2xl:h-4
        max-lg:w-7 max-lg:h-7
        max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'awsec2' ? (
        <Icon
          icon="logos:aws-ec2"
          title={item}
          className="w-7 h-7 cursor-pointer
        max-2xl:w-4 max-2xl:h-4
        max-lg:w-7 max-lg:h-7
        max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'awsamplify' ? (
        <Icon
          icon="logos:aws-amplify"
          title={item}
          className="w-7 h-7 cursor-pointer
        max-2xl:w-4 max-2xl:h-4
        max-lg:w-7 max-lg:h-7
        max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'awsrds' ? (
        <Icon
          icon="logos:aws-rds"
          title={item}
          className="w-7 h-7 cursor-pointer
        max-2xl:w-4 max-2xl:h-4
        max-lg:w-7 max-lg:h-7
        max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'awsmq' ? (
        <Icon
          icon="logos:aws-mq"
          title={item}
          className="w-7 h-7 cursor-pointer
        max-2xl:w-4 max-2xl:h-4
        max-lg:w-7 max-lg:h-7
        max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'hapi' ? (
        <Icon
          icon="logos:hapi"
          title={item}
          className="w-7 h-7 cursor-pointer
        max-2xl:w-4 max-2xl:h-4
        max-lg:w-7 max-lg:h-7
        max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'fejavascript' ? (
        <Icon
          icon="tabler:brand-javascript"
          title={item}
          className="w-7 h-7 transition duration-300 cursor-pointer hover:text-[#d5ba31]
          max-2xl:w-4 max-2xl:h-4
          max-lg:w-7 max-lg:h-7
          max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'openapi' ? (
        <Icon
          icon="eos-icons:api-outlined"
          title={item}
          className="w-7 h-7 cursor-pointer
          max-2xl:w-4 max-2xl:h-4
          max-lg:w-7 max-lg:h-7
          max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'jwt' ? (
        <Icon
          icon="logos:jwt-icon"
          title={item}
          className="w-7 h-7 cursor-pointer
          max-2xl:w-4 max-2xl:h-4
          max-lg:w-7 max-lg:h-7
          max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'githubpages' ? (
        <FiGithub
          title={item}
          className="w-7 h-7 cursor-pointer
        max-2xl:w-4 max-2xl:h-4
        max-lg:w-7 max-lg:h-7
        max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'androidstudio' ? (
        <SiAndroidstudio
          title={item}
          className="w-7 h-7 cursor-pointer transition duration-300 hover:text-[#3ddc84]
        max-2xl:w-4 max-2xl:h-4
        max-lg:w-7 max-lg:h-7
        max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'redux' ? (
        <SiRedux
          title={item}
          className="w-7 h-7 cursor-pointer transition duration-300 hover:text-[#764abc]
        max-2xl:w-4 max-2xl:h-4
        max-lg:w-7 max-lg:h-7
        max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'firebase' ? (
        <SiFirebase
          title={item}
          className="w-7 h-7 cursor-pointer transition duration-300 hover:text-[#ffca2a]
        max-2xl:w-4 max-2xl:h-4
        max-lg:w-7 max-lg:h-7
        max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'java' ? (
        <SiJava
          title={item}
          className="w-7 h-7 cursor-pointer transition duration-300 hover:text-[#eb2024]
        max-2xl:w-4 max-2xl:h-4
        max-lg:w-7 max-lg:h-7
        max-sm:w-5 max-sm:h-5"
        />
      ) : item === 'googlemap' ? (
        <Icon
          icon="logos:google-maps"
          title={item}
          className="w-7 h-7 cursor-pointer transition duration-300 hover:text-[#eb2024]
        max-2xl:w-4 max-2xl:h-4
        max-lg:w-7 max-lg:h-7
        max-sm:w-5 max-sm:h-5"
        />
      ) : (
        <p>{item}</p>
      )}
    </div>
  );
};

export default FrameworkIcon;
