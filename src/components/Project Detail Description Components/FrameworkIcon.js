import React from 'react';
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io5';
import {
  SiRabbitmq,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiAndroidstudio,
  SiFirebase,
} from 'react-icons/si';
import { FaAws, FaNode } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { Icon } from '@iconify/react';
import ReactIconSVG from './ReactIconSVG';

const FrameworkIcon = ({ item }) => {
  return (
    <div>
      {item === 'nodejs' ? (
        <FaNode className="w-8 h-8" />
      ) : item === 'javascript' ? (
        <IoLogoJavascript className="w-8 h-8" />
      ) : item === 'rabbitmq' ? (
        <SiRabbitmq className="w-8 h-8" />
      ) : item === 'nodemailer' ? (
        <img
          src="https://nodemailer.com/nm_logo_200x136.png"
          alt="nodemailer"
          className="w-5 h-5"
        />
      ) : item === 'postgres' ? (
        <SiPostgresql className="w-8 h-8" />
      ) : item === 'reactjs' ? (
        <SiReact className="w-8 h-8" />
      ) : item === 'html' ? (
        <IoLogoHtml5 className="w-8 h-8" />
      ) : item === 'css' ? (
        <IoLogoCss3 className="w-8 h-8" />
      ) : item === 'tailwind' ? (
        <SiTailwindcss className="w-8 h-8" />
      ) : item === 'reacticon' ? (
        <ReactIconSVG className="w-8 h-8" />
      ) : item === 'aws' ? (
        <FaAws className="w-8 h-8" />
      ) : item === 'awsec2' ? (
        <Icon icon="logos:aws-ec2" className="w-8 h-8" />
      ) : item === 'awsamplify' ? (
        <Icon icon="logos:aws-amplify" className="w-8 h-8" />
      ) : item === 'awsrds' ? (
        <Icon icon="logos:aws-rds" className="w-8 h-8" />
      ) : item === 'awsmq' ? (
        <Icon icon="logos:aws-mq" className="w-8 h-8" />
      ) : item === 'hapi' ? (
        <Icon icon="logos:hapi" className="w-8 h-8" />
      ) : item === 'fejavascript' ? (
        <Icon icon="tabler:brand-javascript" className="w-8 h-8" />
      ) : item === 'openapi' ? (
        <Icon icon="eos-icons:api-outlined" className="w-8 h-8" />
      ) : item === 'githubpages' ? (
        <FiGithub className="w-8 h-8" />
      ) : item === 'androidstudio' ? (
        <SiAndroidstudio className="w-8 h-8" />
      ) : item === 'firebase' ? (
        <SiFirebase className="w-8 h-8" />
      ) : (
        <p>{item}</p>
      )}
    </div>
  );
};

export default FrameworkIcon;
