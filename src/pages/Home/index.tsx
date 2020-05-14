import React from 'react';
import classnames from 'classnames';
import { Button } from 'antd';
import style from './style.module.scss';
import Global from '@store/Global';

const Home: React.FC<{}> = () => {
  const { name } = Global.useContainer();
  return (
    <div className={classnames(style.homeContainer)} data-testid="homeTitle">
      <div>Welcome, {name}</div>
      <Button type="primary">Button</Button>
    </div>
  );
};

export default Home;
