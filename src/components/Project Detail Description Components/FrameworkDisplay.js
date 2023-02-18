import React from 'react';

const FrameworkDisplay = ({ framework }) => {
  //   console.log(framework);
  //   console.log(Object.keys(framework));
  console.log(framework);
  return (
    <div className="bg-white drop-shadow-md flex-1 rounded-xl">
      <p className="bg-purple-dark-fancy first-letter:capitalize rounded-t-xl text-sm p-1 text-center text-white">
        {Object.keys(framework)}
      </p>
    </div>
  );
};

export default FrameworkDisplay;
