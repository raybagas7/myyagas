import React from 'react';

const ImportantToKnow = () => {
  return (
    <div className="p-3 pt-0 text-sm indent-4">
      <p className="mb-2">Love to code</p>
      <p className="mb-2">
        Unemployed{' '}
        <span
          className="text-xxs cursor-pointer transition duration-1000 rounded-full pl-2 pr-2 bg-white text-white
                  hover:bg-black-steam"
        >
          Help
        </span>
      </p>
      <div className="bg-white shadow-md rounded-lg pl-3 pr-3">
        <p className="text-center pr-3 border-b-2 border-black-steam">
          Capability
        </p>
        <div className="pt-1 pb-1 text-xs">
          <p>Web Development</p>
          <p>Full Stack Development</p>
          <p>I love design and stuff like that</p>
        </div>
      </div>
    </div>
  );
};

export default ImportantToKnow;
