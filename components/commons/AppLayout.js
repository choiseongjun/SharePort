import React from 'react';
import Link from 'next/link';
import {  Input, Menu } from 'antd';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

  /*
  @Date 2019-08-02
  @author 최성준
  @brief 메뉴리스트
  @description: Link(Next) 는 pages폴더안에만 탐
*/
const AppLayout = ({ children }) => {
    const { isLoggedIn } = useSelector(state => state.user);
    return (
        <div>
           
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>Home</a></Link></Menu.Item>
                {isLoggedIn?'':<Menu.Item key="SignUp"><Link href="/signup"><a>회원가입</a></Link></Menu.Item>}
                <Menu.Item key="SharePort"><Link href="/shareport"><a>Share PortPolio</a></Link></Menu.Item>
              
                <Menu.Item key="mail">
                <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
                </Menu.Item>
            </Menu>
            {children}
         
        </div>
    );
};
AppLayout.propTypes = {
    children: PropTypes.node,
  };
export default AppLayout;