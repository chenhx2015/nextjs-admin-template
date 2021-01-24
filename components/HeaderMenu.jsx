import React, { useState } from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import './HeaderMenu.css';

export default function HeaderMenu({ children }) { 
  const [current, setCurrent] = useState('mail');
  const handleClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <Menu.Item key="nav" icon={<SettingOutlined />}>
          Navigation Two
        </Menu.Item>
      </Menu>
      {
        current === 'mail' && 
        <div className="admin__header-tab-content">
          这是 tab 1 的内容, 根据每个 tab 的 key 来展示
          { children }
        </div>
      }
      {
        current === 'app' && 
        <div className="admin__header-tab-content">
          这是 tab 2 的内容，根据每个 tab 的 key 来展示
          { children }
        </div>
      }
      {
        current === 'nav' && 
        <div className="admin__header-tab-content">
          这是 tab 3 的内容， 根据每个 tab 的 key 来展示
          
        </div>
      }
    </>
  );
}