import React from 'react';
import { Container } from 'unstated-next';

type TContainer<V, S> = Container<V, S>;

const withStore = <V, S>(Container: TContainer<V, S>, initialState?: any) => (
  instance: React.ReactElement
) => {
  return <Container.Provider initialState={initialState}>{instance}</Container.Provider>;
};

export type WithStore = typeof withStore;

export default withStore;
