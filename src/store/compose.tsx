import React from 'react';
import { Container } from 'unstated-next';

function compose(...containers: Container<any, any>[]) {
  return function Component(props: any) {
    return containers.reduceRight((children, Container) => {
      return <Container.Provider>{children}</Container.Provider>;
    }, props.children);
  };
}

export default compose;
