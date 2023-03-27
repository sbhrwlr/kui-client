import React from 'react';
import '../assets/styles/Sidebar.scss';
import {
  TbBrandGithub,
  TbSettings,
  TbBug,
  TbMoon,
  TbSun,
} from 'react-icons/tb';
import { Divider } from 'antd';
import { ReactComponent as KuiLogo } from '../assets/vectors/kui_logo.svg';
import useThemeContexApi from '../contexts/ThemeContext';

// export interface ISidebarProps {}

export const Sidebar = () =>
  // props: ISidebarProps
  {
    const { globalTheme: theme, toggleTheme } = useThemeContexApi();

    return (
      <div className="sb">
        <KuiLogo className="sb__logo" />
        <div className="sb__menu">
          {theme === 'light' ? (
            <TbMoon className="sb__menu__icon" onClick={toggleTheme} />
          ) : (
            <TbSun className="sb__menu__icon" onClick={toggleTheme} />
          )}
          <TbBug className="sb__menu__icon" />
          <TbSettings className="sb__menu__icon" />
          <TbBrandGithub className="sb__menu__icon" />
        </div>
      </div>
    );
  };
