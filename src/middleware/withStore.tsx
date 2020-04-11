import React from 'react';
import { Container } from 'unstated-next';

const withProvider = (Container: Container<any, any>, initialState?: any) => (
  instance: React.ReactElement
) => {
  return <Container.Provider initialState={initialState}>{instance}</Container.Provider>;
};

export type WithProvider = typeof withProvider;

export default withProvider;
