import React from 'react';
import FrameworkIcon from './FrameworkIcon';

const FrameworkDisplay = ({ framework }) => {
  // console.log(framework);
  //   console.log(Object.keys(framework));
  // console.log(framework[Object.keys(framework)[0]]);
  return (
    <div className="bg-white drop-shadow-md flex-1 rounded-xl flex flex-col">
      <p className="bg-purple-dark-fancy first-letter:capitalize rounded-t-xl text-sm p-1 text-center text-white">
        {Object.keys(framework)}
      </p>
      <div className="flex gap-2 justify-center items-center flex-1 p-1">
        {framework[Object.keys(framework)[0]].map((item) => (
          <FrameworkIcon item={item} key={item} />
        ))}
      </div>
    </div>
  );
};

export default FrameworkDisplay;
