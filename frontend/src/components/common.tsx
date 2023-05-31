import React from 'react';
import { TopBar } from './topbar';

export const Common: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <TopBar />
      <div className="bg-[#e5e5e5] px-24 py-10 h-auto text-center">
        {children}
      </div>
    </>
  );
};
