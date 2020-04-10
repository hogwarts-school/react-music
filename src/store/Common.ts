import { useState, useEffect, useCallback } from 'react';
import { createContainer } from 'unstated-next';

const Common = () => {
  const defaultUserName = '陌生人';
  const [userName, setUserName] = useState(defaultUserName);

  const resetUserName = useCallback(() => setUserName(''), []);

  useEffect(() => {
    document.title = `欢迎你， ${userName || defaultUserName}`;
  }, [userName, defaultUserName]);

  return { userName, setUserName, resetUserName };
};

export default createContainer(Common);
