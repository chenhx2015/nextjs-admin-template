import React from 'react';
import '../index.css';
import Layout from '../components/Layout';
import HeaderMenu from '../components/HeaderMenu';
import IndexTable from '../components/IndexTable';

// index 页面有图表
export default function Home() {
  return (
    <Layout>
      {/* <Charts /> */}
      <div className="admin__content-chart">
        预留的放图表的区域
      </div>
      <HeaderMenu>
        <IndexTable />
      </HeaderMenu>
    </Layout>
  )
}
