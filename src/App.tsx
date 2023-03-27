import React, { createContext, useState } from 'react';

import logo from './logo.svg';
import './App.scss';
import { Sidebar } from './containers/SideBar';
import { ThemeProvider } from './contexts/ThemeContext';
import { AddClusterForm } from './components/AddClusterForm';
import { IntroContainer } from './containers/IntroContainer';
import { AuthProvider, useAuth } from './contexts/Auth';
import { ContentContainer } from './containers/ContentContainer';
import { ContentContextProvider } from './contexts/ContentContext';

const App = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <AuthProvider>
      <ContentContextProvider>
        <ThemeProvider>
          <div className="App">
            <Sidebar />
            <ContentContainer />
          </div>
        </ThemeProvider>
      </ContentContextProvider>
    </AuthProvider>
  );
};

export default App;
