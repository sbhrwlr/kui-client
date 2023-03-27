import React from 'react';
import '../assets/styles/ContentViewerContainer.scss';
import { useContentContext } from '../contexts/ContentContext';
import BrokerContentContainer from './BrokerContentContainer';
import ClusterContentContainer from './ClusterContentContainer';
import ConsumerGroupsContentContainer from './ConsumerGroupsContentContainer';

export const ContentViewerContainer = () => {
  const { contentType } = useContentContext();
  let content;

  switch (contentType) {
    case 'CLUSTER_CONTENT':
      content = <ClusterContentContainer />;
      break;
    case 'BROKERS_CONTENT':
      content = <BrokerContentContainer />;
      break;
    case 'CONSUMER_GROUPS':
      content = <ConsumerGroupsContentContainer />;
      break;
    default:
      content = <div>Empty</div>;
  }

  return <div className="content-viewer-root">{content}</div>;
};
