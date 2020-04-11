import React from 'react';
import { SWRConfig } from 'swr';
import { PickComponentParam } from 'globalType';

type ValueType = PickComponentParam<typeof SWRConfig, 'value'>;

const withFetcher = (config: ValueType = {}) => (instance: React.ReactElement) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 0,
        ...config
      }}
    >
      {instance}
    </SWRConfig>
  );
};

export type WithFetcher = typeof withFetcher;

export default withFetcher;
