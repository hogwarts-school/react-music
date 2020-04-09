import React from 'react';
import classnames from 'classnames';
import { Common } from './../../store';
import style from './style.module.scss';

const Home: React.FC<{}> = () => {
  const { setUserName, userName, resetUserName } = Common.useContainer();
  return (
    <div
      className={classnames(style.homeContainer, { [style.class1]: true, [style.class2]: true })}
      data-testid="homeTitle"
    >
      这是首页
      <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      {userName}
      <button onClick={resetUserName}>重置用户名</button>
    </div>
  );
};

export default Home;
