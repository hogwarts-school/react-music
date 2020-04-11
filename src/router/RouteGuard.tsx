import React, { useCallback } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { User } from '@src/store';

type RouterGuardProps = React.ComponentProps<typeof Route> & {
  redirectPath?: string;
};

const RouteGuard: React.FC<RouterGuardProps> = ({
  children,
  redirectPath = '/login',
  ...otherProps
}) => {
  const {
    userInfo: { token }
  } = User.useContainer();
  const render = useCallback(({ location }) => {
    if (token) {
      return children;
    }
    return (
      <Redirect
        to={{
          pathname: redirectPath,
          state: { from: location }
        }}
      />
    );
  }, [children, redirectPath, token]);

  return <Route {...otherProps} render={render} />;
};

export default RouteGuard;
