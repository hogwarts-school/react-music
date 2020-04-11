import { useState, useEffect, useCallback } from 'react';
import { createContainer } from 'unstated-next';
import produce from 'immer';
import * as R from 'ramda';

const defaultUserInfo = {
  token: '', // token
  gender: 0, // 性别
  nickname: '', // 昵称
  signature: '', // 个性签名
  avatarUrl: '', // 头像
  followers: 0, // 粉丝
  following: 0 // 关注的人
};

type UserInfo = typeof defaultUserInfo;
type PartUserInfo = Partial<UserInfo>;

const User = () => {
  const defaultUserName = '陌生人';
  const [userInfo, setUserInfo] = useState<UserInfo>(defaultUserInfo);
  const [userName, setUserName] = useState(defaultUserName);

  const logout = useCallback(() => {
    setUserInfo(defaultUserInfo);
  }, [setUserInfo]);

  const onUpdUserInfo = useCallback(
    (partUserInfo: PartUserInfo) => {
      setUserInfo(
        produce(userInfo, (draftState) => {
          console.log(partUserInfo, 'partUserInfo');
          Object.entries(partUserInfo).forEach(([key, value]) => {
            // draftState[key] = value;
            Object.assign(draftState, partUserInfo);
            // draftState.nickname = value
          });
        })
      );
    },
    [userInfo, setUserInfo]
  );

  return { logout, userInfo, setUserInfo: onUpdUserInfo };
};

export default createContainer(User);
