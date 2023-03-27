import React, { useEffect, useState } from 'react';
import { ExecException } from 'child_process';
import { RightOutlined } from '@ant-design/icons';
import { Button, Modal } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as KuiIntroLogo } from '../assets/vectors/kui_intro.svg';
import { fetchHealthData } from '../api/healthcheck';
import DataServiceResponse from '../interfaces/HealthData';
import '../assets/styles/IntroContainer.scss';
import { useAuth } from '../contexts/Auth';

export const IntroContainer = () => {
  const [healthData, setData] = useState<DataServiceResponse | null>(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  console.log(user);

  const navigateToAuth = () => {
    navigate('/auth')
  };


  useEffect(() => {
    const fetchAPI = async () => {
    fetchAPI();
    }
  }, []);

  return healthData ? (
    <div className="introc">
      <div className="introc__content">
        <div className="introc__content__text-main">
          <span>
            Simple way
            <br />
            to control your
            <br />
            <span className="introc__content__text-main-highlighted">
              Kafka Cluster
            </span>
          </span>
        </div>
        <Button
          leftIcon={<RightOutlined />}
          onClick={navigateToAuth}
          radius="md"
          size="md"
          className='primary_button'
        >
          Get Started
        </Button>
      </div>
      <KuiIntroLogo className="introc__vector" />
    </div>
  ) : (
    <div className="introc" />
  );
};
