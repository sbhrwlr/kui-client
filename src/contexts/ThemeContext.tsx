import React, { useContext, useEffect, useState } from 'react';
import { ConfigProvider , theme} from 'antd';


interface ThemeContextProps {
  globalTheme: string;
  toggleTheme: () => void;
}

const fetchDefaultTheme = () => {
  const currTheme = localStorage.getItem('theme');
  if (currTheme !== null) {
    return JSON.parse(currTheme);
  }
  localStorage.setItem('theme', JSON.stringify('light'));
  return 'light';
};

const ThemeContext = React.createContext<ThemeContextProps>({
  globalTheme: fetchDefaultTheme(),
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

// $light-text-color: #f4f5f7;
// $dark-text-color: #161819;
// $bg-light: #f4f5f7;
// $bg-dark: #161819;
// $primary: #2673f6;
// $bg-light-dark: #242728;
// $bg-deep-white: #f0f1f2;

const antDDark = {
  colorPrimary: '#2673f6',
  colorBgElevated: '#161819',
  colorBgContainer: '#242728',
  colorText: '#f4f5f7',
  colorTextPlaceholder: 'rgba(255, 255, 255, 0.25)',
  colorBorderSecondary: '#212121',
  colorIcon: '#f4f5f7',
  colorSuccessBg: 'rgba(246, 255, 237, 0.25)'
};

const antDLight = {
  colorPrimary: '#2673f6',
  // colorBgElevated: '#161819',
  colorBgContainer: '#ffffff',
  colorText: '#161819',
  colorTextPlaceholder: 'rgba(255, 255, 255, 0.25)',
  colorBorderSecondary: '#f1f1f1',
  colorIcon: '#161819',
  colorSuccessBg: '#f6ffed'
};



const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [globalTheme, setTheme] = useState<string>(fetchDefaultTheme());
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if(globalTheme==='light')
    setIsDarkMode(false)
  else
    setIsDarkMode(true)
  }, [])
  
  const toggleTheme = () => {
    const newTheme = globalTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setIsDarkMode(newTheme === 'dark');
    localStorage.setItem('theme', JSON.stringify(newTheme));
  };

  return (
    <ThemeContext.Provider value={{ globalTheme, toggleTheme }}>
      <ConfigProvider
      theme= {
        {
          token: isDarkMode? antDDark: antDLight
        }
      }
      >
        <div className={`theme-${globalTheme}`}>{children}</div>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

export { ThemeContext, ThemeProvider };

export default useThemeContext;
