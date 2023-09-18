import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import Supervision from '@/components/Supervision/Supervision';

const FieldSupervisionPage: NextPage = (): React.ReactElement => {
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/field-top-image.jpg">
        <Supervision />
      </ContentsLayout>
    </Layout>
  );
};

export default FieldSupervisionPage;
