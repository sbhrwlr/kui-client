import React, { useState } from 'react';
import {
  CloudDownloadOutlined,
  CloudServerOutlined,
  ClusterOutlined,
} from '@ant-design/icons';
import '../assets/styles/MainContent.scss';
import { Layout, Menu, MenuTheme, theme } from 'antd';
import useThemeContexApi from '../contexts/ThemeContext';
import { ContentViewerContainer } from './ContentViewerContainer';
import {
  ContentContextProvider,
  useContentContext,
} from '../contexts/ContentContext';

const { Sider, Content } = Layout;

const MainContentContainer = () => {
  const { globalTheme } = useThemeContexApi();
  const { changeContent } = useContentContext();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const fetchMenuTheme = (appTheme: string) => {
    let menuTheme: MenuTheme = 'dark';
    if (appTheme === 'light') menuTheme = 'light';
    else menuTheme = 'dark';
    return menuTheme;
  };

  const mainMenuItem = [
    {
      type: 'group',
      label: 'MENU',
      key: 'Group',
      children: [
        {
          key: '1',
          icon: <ClusterOutlined />,
          label: 'Clusters',
          onClick: () => {
            changeContent('CLUSTER_CONTENT');
          },
        },
        {
          key: '2',
          icon: <CloudServerOutlined />,
          label: 'Brokers',
          onClick: () => {
            changeContent('BROKERS_CONTENT');
          },
        },
        {
          key: '3',
          icon: <CloudDownloadOutlined />,
          label: 'Consumer Groups',
          onClick: () => {
            changeContent('CONSUMER_GROUPS');
          },
        },
      ],
    },
  ];

  return (
    <Layout className="main">
      <Sider collapsible className="main_sider" width={250}>
        <Menu
          className="main_menu"
          theme={fetchMenuTheme(globalTheme)}
          mode="inline"
          defaultSelectedKeys={['1']}
          items={mainMenuItem}
        />
      </Sider>
      <Layout className="main_content">
        <Content>
          <ContentViewerContainer />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainContentContainer;
