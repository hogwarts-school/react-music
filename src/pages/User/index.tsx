import React from 'react';
import { User } from '@src/store';
import { useHistory } from 'react-router-dom';

const UserPage: React.FC<{}> = () => {
  const { userInfo: { nickname } } = User.useContainer();
  const history = useHistory();
  return (
    <div>
      User - {nickname}
      <button onClick={history.goBack}>返回</button>
    </div>
  );
};

export default UserPage;
