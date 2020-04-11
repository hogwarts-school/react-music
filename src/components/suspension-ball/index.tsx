import React from 'react';
import { Global } from '@src/store';
import style from './style.module.scss';

const SuspensionBall = () => {
  const { theme, toggleTheme } = Global.useContainer();
  return (
    <div className={style.container} onClick={toggleTheme}>
      {theme}
    </div>
  );
};

export default SuspensionBall;
