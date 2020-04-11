import React from 'react';
import classnames from 'classnames';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd-mobile';
import useRequest from '@hooks/useRequest';
import { User } from '@src/store';
import style from './style.module.scss';
import Icon from '@components/icon';

const Home: React.FC<{}> = () => {
  const history = useHistory();
  const { data } = useRequest({
    url: '/api/playlist/catlist'
  });
  console.log(data, 'data');
  const {
    userInfo: { nickname },
    setUserInfo
  } = User.useContainer();
  return (
    <div className={classnames(style.homeContainer)} data-testid="homeTitle">
      这是首页
      <Button>132123</Button>
      <input
        type="text"
        value={nickname}
        onChange={(e) => setUserInfo({ nickname: e.target.value })}
      />
      <button
        onClick={() => {
          history.push('/login', {
            state: '123'
          });
        }}
      >
        前往user页面
      </button>
      <div className="df w100percent">
        <div className={style.demoBox} />
        <div className={style.demoBox} />
      </div>
      <Icon type="icon-qunti" size={48} />
    </div>
  );
};

export default Home;
