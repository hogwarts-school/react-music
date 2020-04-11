import React from 'react';
import { User } from '@src/store';
import { useHistory } from 'react-router-dom';

const UserPage: React.FC<{}> = () => {
  const { userInfo: { nickname } } = User.useContainer();
  const history = useHistory();
  return (
    <div>
      用户页面哦 - {nickname}
      <button onClick={history.goBack}>返回</button>
    </div>
  );
};

export default UserPage;
