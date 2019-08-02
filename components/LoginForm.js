import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { useInput } from '../pages/signup'; // TODO: util 폴더로 옮기기
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../reducers/user';
/*
  @Date 2019-08-02
  @author 최성준
  @brief 유저로그인 컴포넌트 
*/
const LoginForm = () => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const { isLoggingIn } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        id, password,
      },
    });
  }, [id, password]);


  return (
    <Form onSubmit={onSubmitForm} style={{ padding: '10px' }}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" value={password} onChange={onChangePassword} type="password" required />
      </div>
      <div style={{ marginTop: '10px' }}>
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </div>
    </Form>
  );
};

export default LoginForm;
