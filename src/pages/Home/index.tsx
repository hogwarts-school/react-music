import React, { useCallback } from 'react';
import classnames from 'classnames';
import { Button } from 'antd-mobile';
import { useHistory } from 'react-router-dom';
import style from './style.module.scss';
import { User } from '@src/store';

const Home: React.FC<{}> = () => {
  const {
    logout,
    userInfo: { phone, password }
  } = User.useContainer();
  const history = useHistory();

  const toLogin = useCallback(() => {
    logout();
    history.replace('/login');
  }, [logout, history]);

  return (
    <div className={classnames(style.homeContainer)} data-testid="homeTitle">
      {`你的账号： ${phone}, 你的密码: ${password}`}
      <Button onClick={toLogin}>退出登录登录</Button>
    </div>
  );
};

export default Home;
