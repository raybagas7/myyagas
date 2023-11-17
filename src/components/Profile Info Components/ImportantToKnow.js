import React from "react";

const ImportantToKnow = () => {
  return (
    <div
      className="p-3 pt-0 text-sm indent-4
    max-2xl:text-xs max-2xl:p-1"
    >
      <p className="mb-2">Software Developer</p>
      <p className="mb-2">
        Frontend Engineer{" "}
        <span
          className="text-xs cursor-pointer transition duration-1000 rounded-full pl-2 pr-2 bg-white text-white
                  hover:bg-black-steam
                  max-2xl:pl-1 max-2xl:pr-1"
        >
          Help
        </span>
      </p>
      <div
        className="bg-white shadow-md rounded-lg pl-3 pr-3
      max-2xl:pl-1 max-2xl:pr-1"
      >
        <p className="text-center pr-3 border-b-2 border-black-steam">
          Capability
        </p>
        <div
          className="pt-1 pb-1 text-xs
        max-2xl:text-xxs"
        >
          <p>Web Development</p>
          <p>Frontend Development - JS/TS</p>
          <p>(NextJs, ReactJs, React Native)</p>
        </div>
      </div>
    </div>
  );
};

export default ImportantToKnow;
