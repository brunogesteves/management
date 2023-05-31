import React from 'react';

export const TopBar: React.FC = () => {
  return (
    <div className="h-24 w-full flex  items-center ">
      <div className="w-1/6 flex  justify-center ">
        <img src="./logotype.png" alt="logotype" />
      </div>
      <div className="w-4/6 h-full"></div>
      <div className=" w-1/6 h-full flex justify-center items-center">
        <div className="bg-[#b5f1dd] w-[65px] h-16 rounded-full "></div>
      </div>
    </div>
  );
};
