import React from 'react';
import { Common } from '../components/common';
import { Content } from '../components/content';
// import { Login } from '../components/Login';

export const App: React.FC = () => {
  return (
    <Common>
      <Content />
      {/* <Login /> */}
    </Common>
  );
};
