import React from 'react';
import classnames from 'classnames';
import { Button } from 'antd';
import style from './style.module.scss';

class Home extends React.Component {
  render() {
    return (
      <div className={classnames(style.homeContainer)} data-testid="homeTitle">
        <div>Welcome, 年轻人</div>
        <Button type="primary">Button</Button>
      </div>
    );
  }
}
export default Home;
