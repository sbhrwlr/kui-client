import React from 'react';
import '../assets/styles/ContentContainer.scss';
import { Route, Routes } from 'react-router-dom';
import { Center } from '@mantine/core';
import { useAuth } from '../contexts/Auth';
import { IntroContainer } from './IntroContainer';
import MainContentContainer from './MainContentContainer';
import { EmailAuthenticationForm } from '../components/EmailAuthenticationForm';

export const ContentContainer = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  console.log();
  return (
    <div className="root_container">
        <Routes>
          <Route path='/' element = {user ? <MainContentContainer /> : <IntroContainer />}/>
          
          <Route path='/auth' element = {user ? <MainContentContainer /> :<EmailAuthenticationForm/>}/>
        </Routes>
    </div>
  );
};
