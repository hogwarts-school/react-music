import { useState, useCallback } from 'react';
import { createContainer } from 'unstated-next';

const Global = () => {
  const [name, setName] = useState('croatia');

  const updName = useCallback(
    (newName) => {
      setName(newName);
    },
    [setName]
  );

  return { name, updName };
};

export default createContainer(Global);
