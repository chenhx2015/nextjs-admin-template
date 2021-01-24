import React from 'react';
import '../index.css';
import Layout from '../components/Layout';
import HeaderMenu from '../components/HeaderMenu';
import AdminTable from '../components/AdminTable';

export default function Home() {
  return (
    <Layout>
      <HeaderMenu>
        <AdminTable />
      </HeaderMenu>
    </Layout>
  )
}
