import React, { useState, useEffect, useCallback } from 'react';
import { useSessionStorage } from 'react-use';
import style from './style.module.scss';
import classNames from 'classnames';

const FirstScreen = () => {
  const [count, setCount] = useState(5);
  const [isHide, setHide] = useState(false);
  const [isViewedFirstScreen, setViewStatus] = useSessionStorage('isViewedFirstScreen', false);
 
  const hide = useCallback(() => {
    setViewStatus(true);
    setHide(true);
  }, [setHide, setViewStatus]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    if (count <= 0 || isViewedFirstScreen) {
      hide();
    }
    return () => {
      clearInterval(timer);
    };
  }, [count, setCount, isViewedFirstScreen, hide]);

  if (isHide) {
    return null;
  }

  return (
    <div className={classNames(style.container, 'df fdc ac jc')}>
      <div className={classNames(style.jump, 'df jc ac')} onClick={hide}>
        跳过({count})
      </div>
      <div className={style.mainText}>网易云音乐</div>
    </div>
  );
};

export default FirstScreen;
