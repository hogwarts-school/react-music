import React, { useState, useMemo, useCallback } from 'react';
import { TabBar } from 'antd-mobile';
import Home from '@pages/Home';
import User from '@pages/User';
export enum HomeTabBarType {
  Home = '首页',
  User = '我的'
}

const HomeTabBar: React.FC<{}> = () => {
  const [activeItem] = useState(HomeTabBarType.Home);

  const tabBarList = useMemo(() => {
    return [
      {
        title: HomeTabBarType.Home,
        key: HomeTabBarType.Home,
        badge: 0,
        dot: false,
        icon: null,
        selectedIcon: null,
        render(item: any) {
          return <Home />;
        }
      },
      {
        title: HomeTabBarType.User,
        key: HomeTabBarType.User,
        badge: 0,
        dot: false,
        icon: null,
        selectedIcon: null,
        render(item: any) {
          return <User />;
        }
      }
    ];
  }, []);

  const renderIcon = useCallback((icon?: string) => {
    return <div />;
  }, []);

  return (
    <TabBar>
      {tabBarList.map((item) => {
        const { render, ...otherInfo } = item;
        const { key, title, dot } = otherInfo;
        const isSelected = activeItem === key;
        return (
          <TabBar.Item
            key={key}
            selected={isSelected}
            title={title}
            dot={dot}
            icon={renderIcon()}
            selectedIcon={renderIcon()}
          >
            {render(otherInfo)}
          </TabBar.Item>
        );
      })}
    </TabBar>
  );
};

export default HomeTabBar;
