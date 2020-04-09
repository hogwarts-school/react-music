import { useState } from 'react';
import { createContainer } from 'unstated-next';

const Common = () => {
  const [userName, setUserName] = useState('croatia');

  const resetUserName = () => setUserName('');

  return { userName, setUserName, resetUserName };
};

export default createContainer(Common);
