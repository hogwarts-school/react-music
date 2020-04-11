import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

const LoginPage = () => {
  const location = useLocation();
  const params = useParams();

  console.log(location, params, 'params');
  return <div>登录页面</div>;
};

export default LoginPage;
