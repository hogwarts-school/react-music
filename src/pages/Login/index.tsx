import React, { useState, useCallback } from 'react';
import { Button, InputItem, Toast } from 'antd-mobile';
import { User } from '@src/store';
import { useHistory } from 'react-router-dom';

import classNames from 'classnames';

import style from './style.module.scss';
const LoginPage = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const { setUserInfo } = User.useContainer();
  const history = useHistory();

  const login = useCallback(() => {
    if (phone && password) {
      setUserInfo({ token: phone + password, phone, password });
      history.replace('tab-bar');
      return;
    }
    Toast.show(`你啷个倒是输入个账号密码撒`, 300, false);
  }, [phone, password, history, setUserInfo]);

  return (
    <div className={classNames(style.container, 'df fdc jc ac')}>
      <div className={style.title}>不行走两步？</div>

      <div className={classNames(style.form, 'w100percent')}>
        <InputItem
          value={phone}
          onChange={setPhone}
          placeholder="输入你的贫民账号"
          clear
          type="phone"
        >
          账号
        </InputItem>
        <InputItem
          value={password}
          onChange={setPassword}
          placeholder="输入你的贫民密码"
          type="password"
        >
          密码
        </InputItem>
      </div>
      <div className={classNames(style.login, 'w100percent')} onClick={login}>
        <Button className="w100percent1">登录</Button>
      </div>
    </div>
  );
};

export default LoginPage;
