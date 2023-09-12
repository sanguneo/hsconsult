import React from 'react';
import type { NextPage } from 'next';
import { CommonContainer } from '@/shared/constants/pages';
import Header from '@/components/layout/Header/Header';



const IntroHistoryPage: NextPage = (): React.ReactElement => {
  return (
    <CommonContainer>
      <Header />
    </CommonContainer>
  );
};

export default IntroHistoryPage;