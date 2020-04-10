import React from 'react';
import { Common } from '@store/index';
import { useHistory } from 'react-router-dom';

const User: React.FC<{}> = () => {
  const { userName } = Common.useContainer();
  const history = useHistory();
  return (
    <div>
      User - {userName}
      <button onClick={history.goBack}>返回</button>
    </div>
  );
};

export default User;
