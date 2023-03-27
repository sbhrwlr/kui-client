import React from 'react';
import '../assets/styles/EmailAuthenticationForm.scss';
import { Button, Space } from 'antd';
import { GithubFilled, GoogleCircleFilled } from '@ant-design/icons';
import { useAuth } from '../contexts/Auth';

export const OAuthOptions = () => {
  const { signInGithub, signInGoogle } = useAuth();

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Button
        icon={<GithubFilled color="#FFC107" />}
        block
        onClick={signInGithub}
        className="oauth-button"
      >
        Continue With Github
      </Button>
      <Button
        icon={<GoogleCircleFilled color="#FFC107" />}
        block
        onClick={signInGoogle}
        className="oauth-button"
      >
        Continue With Google
      </Button>
    </Space>
  );
};
