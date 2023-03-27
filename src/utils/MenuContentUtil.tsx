import React from 'react';

import {
  CloudDownloadOutlined,
  CloudServerOutlined,
  ClusterOutlined,
} from '@ant-design/icons';
import { ItemType } from 'antd/es/menu/hooks/useItems';

export const mainMenuItem: ItemType[] = [
  {
    type: 'group',
    label: 'Main Menu',
    key: 'Group',
    children: [
      {
        key: '1',
        icon: <ClusterOutlined />,
        label: 'Clusters',
      },
      {
        key: '2',
        icon: <CloudServerOutlined />,
        label: 'Brokers',
      },
      {
        key: '3',
        icon: <CloudDownloadOutlined />,
        label: 'Consumer Groups',
      },
    ],
  },
];
