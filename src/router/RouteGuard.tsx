import React, { useEffect, useCallback } from 'react';
import { Route, Redirect, useHistory, RouteProps } from 'react-router-dom';
import { User } from '@src/store';
import { PickComponentParam } from 'globalType';

type RouterGuardProps = React.ComponentProps<typeof Route> & {
  redirectPath?: string;
};

const RouteGuard: React.FC<RouterGuardProps> = ({
  children,
  redirectPath = '/login',
  component,
  ...otherProps
}) => {
  const {
    userInfo: { token }
  } = User.useContainer();
  const render = useCallback(({ location }) => {
    if (token) {
      return component;
    }
    return (
      <Redirect
        to={{
          pathname: redirectPath,
          state: { from: location }
        }}
      />
    );
  }, []);

  return <Route {...otherProps} render={render} />;
};

export default RouteGuard;
