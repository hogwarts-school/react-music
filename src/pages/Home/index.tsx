import React from 'react';
import classnames from 'classnames';
import { useHistory } from 'react-router-dom';

import { Common } from '@store/index';
import style from './style.module.scss';

const Home: React.FC<{}> = () => {
  const history = useHistory();

  const { setUserName, userName, resetUserName } = Common.useContainer();
  return (
    <div className={classnames(style.homeContainer)} data-testid="homeTitle">
      这是首页
      <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      {userName}
      <button onClick={resetUserName}>重置用户名</button>
      <button
        onClick={() =>
          history.push('/user', {
            query: { a: 1, b: 2 }
          })
        }
      >
        前往user页面
      </button>
    </div>
  );
};

export default Home;
