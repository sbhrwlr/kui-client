import React, { useContext, useState } from 'react';
import { ContentType } from '../utils/Constants';

interface ContentContextProps {
  contentType: ContentType;
  changeContent: (content: ContentType) => void;
}

const ContentContext = React.createContext<ContentContextProps>({
  contentType: 'CLUSTER_CONTENT',
  changeContent: (content: ContentType) => {},
});

interface ContentContextProviderProps {
  children: React.ReactNode;
}

const ContentContextProvider = ({ children }: ContentContextProviderProps) => {
  const [contentType, setContentType] =
    useState<ContentType>('CLUSTER_CONTENT');
  const changeContent = (content: ContentType) => {
    setContentType(content);
    console.log(contentType);
  };

  return (
    <ContentContext.Provider value={{ contentType, changeContent }}>
      {children}
    </ContentContext.Provider>
  );
};

const useContentContext = () => useContext(ContentContext);

export { ContentContext, ContentContextProvider, useContentContext };
