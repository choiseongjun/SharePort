import { Avatar, Card, Button } from 'antd';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';

/*
  @Date 2019-08-02
  @author 최성준
  @brief 유저프로필 컴포넌트 
*/
const UserProfile = () => {
  const { me } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  return ( 
    <Card>
    <Card.Meta
      avatar={<Avatar>{me.nickname[0]}</Avatar>}
      title={me.nickname}
    />
    <Button onClick={onLogout}>로그아웃</Button>
  </Card>

      
    
  );
};

export default UserProfile;
